
console.log('Hello Word');



async function getFlights() {
  const response = await axios.get('http://localhost:5000/flights');
  const data = await response.data;
  console.log('Passou aqui');
  console.log(data);

}

async function getFlightsOrigin() {
  const response = await axios.get('/flights/:origin');
  const data = await response.json();

  console.log(data)
}

async function getFlightsOriginAndDestination() {
  const response = await axios.get('/flights/:origin/:destination');
  const data = await response.json();

  console.log(data)
}

const btnSearch = document.querySelector('#btnSearch');
btnSearch.addEventListener("click", () => {
  getFlights();
});
