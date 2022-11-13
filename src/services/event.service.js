import axios from "axios";
const URL = 'http://localhost:3030/food-truck'
async function fetchEvents(loc, city, state, radius) {
  const fetchAPI = `${URL}/get-event?loc=${loc}&city=${city}&state=${state}&radius=${radius}`;
  const res = await fetch(fetchAPI);
  return res.json();
}
async function postEvent(input) {
  const postAPI = `${URL}/create-event`
  const res = await axios.post(postAPI, input, { withCredentials: true })
  return res
}

const eventService = { fetchEvents, postEvent }

export default eventService;
