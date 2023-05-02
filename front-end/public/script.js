
console.log('Hello Word');



async function getFlights() {
  const response = await axios.get('http://localhost:5000/flights');
  const flights = response.data;
  console.log('Passou aqui');

  const flightList = document.getElementById('flightList');

  while (flightList.firstChild) {
    flightList.removeChild(flightList.firstChild);
  }

  flights.forEach((flight) => {
    const li = document.createElement('li');
    li.textContent = `Flight from ${flight.origin} to ${flight.destination} at ${flight.departureTime}`;

    flightList.appendChild(li);
  })

  // console.log(data);

}

async function getFlightsOrigin() {
  const response = await axios.get('/flights/:origin');
  const data = await response.json();

  console.log(data)
}

async function getFlightsOriginAndDestination(origin, destination) {
  const response = await axios.get(`/flights/${origin}/${destination}`);
  console.log(response)

  const flights = await response.data;

  const flightList = document.getElementById('flightList');

  while (flightList.firstChild) {
    flightList.removeChild(flightList.firstChild);
  }

  flights.forEach((flight) => {
    const li = document.createElement('li');
    li.textContent = `Flight De ${flight.origin} Para ${flight.destination} Horário de embarque ${flight.departureTime} Empresa ${flight.airline}`;

    flightList.appendChild(li);
  })
  console.log(flights)
}

const btnSearch = document.querySelector('#btnSearch');
btnSearch.addEventListener("click", () => {
  const origin = document.querySelector('#origin').value;
  const destination = document.querySelector('#destination').value;

  getFlightsOriginAndDestination(origin, destination);

});


const btnSearchAll = document.querySelector('#btnSearchAll');
btnSearchAll.addEventListener("click", () => {

  getFlights();

});