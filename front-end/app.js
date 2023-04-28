const express = require('express');
const app = express();
const axios = require('axios');
const port = 5000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});

app.get('/flights', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/flights');
    const flights = response.data;
    console.log(flights);

    // res.status(200).render('flights', { flights });
    res.json(flights);
  } catch (error) {
    console.log(error);

    res.status(500).send('Erro ao buscar dados de voo');
  }
});

app.get('/flights/:origin', async (req, res) => {
  try {
    const origin = req.params.origin;

    const response = await axios.get(`http://localhost:3000/flights/${origin}`);
    console.log(origin)
    const flights = await response.data;
    console.log(flights);

    res.status(200).json(flights);
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro ao buscar dados do voo');
  }
});

app.get('/flights/:origin/:destination', async (req, res) => {
  try {
    const { origin, destination } = req.params;

    const response = await axios.get(`http://localhost:3000/flights/${origin}/${destination}`);
    // console.log(origin)
    const flights = await response.data;
    console.log(flights);

    res.status(200).json(flights);
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro ao buscar dados do voo');
  }
});