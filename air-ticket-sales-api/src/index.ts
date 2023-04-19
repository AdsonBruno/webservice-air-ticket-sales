import express from 'express';
import { config } from 'dotenv';
import { PrismaGetFlightsRepository } from './repositories/get-flights/prisma-get-flights';
import { GetFlightsController } from './controllers/get-flights/get-flights';

config();

const app = express();
const port = process.env.PORT;

app.get(
  '/flights/:travelDate/:departingFrom/:arrivingAt/:numberOfPassengers/:seatType',
  async (req, res) => {
    const {
      travelDate,
      departingFrom,
      arrivingAt,
      numberOfPassengers,
      seatType,
    } = req.params;

    const prismaGetFlightsRepository = new PrismaGetFlightsRepository();

    const getFlightsController = new GetFlightsController(
      prismaGetFlightsRepository
    );

    const { body, statusCode } = await getFlightsController.findFlight(
      travelDate,
      departingFrom,
      arrivingAt,
      Number(numberOfPassengers),
      seatType
    );

    res.send(body).status(statusCode);
  }
);

app.listen(port, () => console.log(`Listening on port ${port}`));
