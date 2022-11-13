const URL = 'http://localhost:3030/food-truck'
async function fetchEvents(loc, city, state, radius) {
  const fetchAPI = `${URL}/get-event?loc=${loc}&city=${city}&state=${state}&radius=${radius}`;
  console.log(fetchAPI)
  const res = await fetch(fetchAPI);
  console.log(res)
    
  return res.json();
}

const eventService = {fetchEvents}

export default eventService;
