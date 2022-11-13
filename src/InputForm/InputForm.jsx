import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./InputForm.css";
import eventService from "../services/event.service";

export const InputForm = () => {


  const [input, setInput] = useState({
    name: '',
    description: '',
    address: '',
    start_time: '',
    end_time: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    await eventService.postEvent(input)
  }

  return (
    <div className="entire-page">
      <div className="input-container">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter Name" name="name" value={input.name} onChange={handleChange} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Information about your food truck" name="description" value={input.description} onChange={handleChange} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St, San Francisco, CA" name="address" value={input.address} onChange={handleChange} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridStartTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="datetime-local" name="start_time" value={input.start_time} onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEndTime">
              <Form.Label>End Time</Form.Label>
              <Form.Control type="datetime-local" name="end_time" value={input.end_time} onChange={handleChange} />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default InputForm;
