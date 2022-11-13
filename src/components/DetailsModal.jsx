import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function handleTime(input) {
  const strArr = input.split('T')
  const date = strArr[0]
  const time = strArr[1].slice(0, -1)
  return `${date} at ${time}`
}
function DetailsModal(props) {

  const startTime = handleTime(props.event.start_time)
  const endTime = handleTime(props.event.end_time)

  const handleMapClick = () => {
    const encoded = props.event.address.replaceAll(' ', '+');
    const URL = `https://www.google.com/maps/place/${encoded}`
    window.open(URL);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.event.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          defaultActiveKey="description"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="description" title="Description">
          <p>{props.event.description}</p>
          </Tab>
          <Tab eventKey="operatingHours" title="Operating Hours">
          <p>Open: {startTime}</p>
          <p>Close: {endTime}</p>
          </Tab>
          <Tab eventKey="map" title="Map">
          <p>Address: {props.event.address}</p>
          <button onClick={handleMapClick}>Open in Google Map</button>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default DetailsModal

