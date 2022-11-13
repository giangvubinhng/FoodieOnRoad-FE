const URL = 'localhost:5000/api'
async function fetchEvents(loc, city, state, radius) {
  const fetchAPI = `${URL}/get-events?loc=${loc}&city=${city}&state=${state}&rad=${radius}`;
  const res = await fetch(fetchAPI);
  return res.json();
}

const eventService = {fetchEvents}

export default eventService;
