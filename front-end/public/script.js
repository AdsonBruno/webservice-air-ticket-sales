const { default: axios } = require('axios');

console.log('Hello Word');

async function getFlights() {
  const response = await fetch('/flights');
  const data = await response.json();

  console.log(data);
}

async function getFlightsOrigin() {
  const response = await axios('/flights/:origin');
  const data = await response.json();

  console.log(data)
}

async function getFlightsOriginAndDestination() {
  const response = await axios('/flights/:origin/:destination');
  const data = await response.json();

  console.log(data)
}

getFlights();
getFlightsOrigin();
getFlightsOriginAndDestination();