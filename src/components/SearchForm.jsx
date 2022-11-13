import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function SearchForm(props) {

  return (
    <>
      <Form className="d-flex" onSubmit={props.handleSubmit()}>
        <Form.Control type="text" className="me-2" placeholder="San Francisco, CA or Current Location" required name="location" id="location" onChange={props.handleChange()} />
        <Form.Control
          type="number"
          placeholder="Within Radius (in Miles)"
          className="me-2"
          aria-label="Search"
          id="radius"
          name="radius"
          onChange={props.handleChange()}
        />
        <Button variant="outline-success" type="submit" >Search</Button>
      </Form>
    </>
  )
}

export default SearchForm
