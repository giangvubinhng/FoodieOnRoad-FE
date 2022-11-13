import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import DetailsModal from './DetailsModal'

function ResultCard({ event}) {
  const [modalShow, setModalShow] = useState(false)
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://media.istockphoto.com/id/847893726/vector/food-truck.jpg?s=612x612&w=0&k=20&c=fK9JGZe0LWPN9ShlPWE2LLzdsTIlsN2LJSJW6J6KT9k=" />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>
            {event.description}
          </Card.Text>
          <button onClick={() => setModalShow(true)}>Details</button>
        </Card.Body>
      </Card>

      <DetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        event={event}
      />
    </>
  );
}

export default ResultCard;
