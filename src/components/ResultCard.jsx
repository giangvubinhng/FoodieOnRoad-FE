import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ResultCard({ title, description, getDetails }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/847893726/vector/food-truck.jpg?s=612x612&w=0&k=20&c=fK9JGZe0LWPN9ShlPWE2LLzdsTIlsN2LJSJW6J6KT9k=" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" onClick={() => getDetails(true)}>Details</Button>
      </Card.Body>
    </Card>
  );
}

export default ResultCard;
