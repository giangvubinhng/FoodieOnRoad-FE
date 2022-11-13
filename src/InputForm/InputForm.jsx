import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./InputForm.css";

export const InputForm = () => {
  return (
    <div className="entire-page">
        <div className="input-container">
            <Form>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="Enter a title" />
            </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Tell us more about your food"/>
            </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridStartTime">
                <Form.Label>Start Time</Form.Label>
                <Form.Control type="datetime-local" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEndTime">
                <Form.Label>End Time</Form.Label>
                <Form.Control type="datetime-local" />
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