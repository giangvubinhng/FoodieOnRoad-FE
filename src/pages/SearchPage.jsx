import { useState } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import eventService from '../services/event.service'
import Card from '../components/ResultCard'
import SearchForm from '../components/SearchForm'
import '../style/SearchPage.css'

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const loc = searchParams.get("loc") || ''
  const city = searchParams.get("city") || ''
  const state = searchParams.get("state") || ''
  const rad = searchParams.get("radius") || ''
  const hasParam = !!(Array.from(searchParams.keys()).length > 0)

  const result = useQuery(
    ["events"],
    () => eventService.fetchEvents(loc, city, state, rad),
    {
      enabled: hasParam,
      cacheTime: 0,
      refetchOnMount: true
    }
  );



  const navigate = useNavigate();

  const [input, setInput] = useState({ location: '', radius: '' })

  const handleChange = (e) => {
    const key = e.target
    switch (key.id) {
      case 'location':
        setInput({ ...input, location: key.value })
        break;
      case 'radius':
        setInput({ ...input, radius: key.value })

    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.location.toLowerCase() === "current location") {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude
        const long = position.coords.longitude;
        const coord = `/search?loc=${long}+${lat}&city=&state=&radius=${input.radius}`
        navigate(coord)
      });
    }
    else {
      const locationString = input.location.split(', ')
      if (locationString.length >= 2) {
        const city = locationString[0]
        const state = locationString[1]
        const coord = `/search?loc=&city=${city}&state=${state}&radius=${input.radius}`
        navigate(coord)
      }

    }
  }
  return (
    <>
      <div className="search-container">
        <SearchForm handleChange={() => handleChange} handleSubmit={() => handleSubmit} />
      </div>

      <div className="result-container">
        {result.fetchStatus !== "idle" && result.isLoading ? 'Loading...' : null}
        {result.error ? 'error' : null}
        {result.data ? <Container>
          <Row sm={4}>
            {result?.data?.map((elem, ind) => {
              return (<Col className="col" key={ind} >
                <Card event={elem} key={elem.id}  />
              </Col>)
            })}
          </Row>
        </Container> : null}
        {/*<Container>
          <Row sm={4}>
            {Array.from({ length: 10 }).map((_, ind) => {
              return (<Col className="col" key={ind} >
                <Card title={"Long gay"} description={"Long bede"} getDetails={(e) => setModalShow(e)} />
              </Col>)
            })}
          </Row>
        </Container>*/}
      </div>
    </>
  )
}

export default SearchPage
