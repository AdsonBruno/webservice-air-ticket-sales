import express from 'express';
import { config } from 'dotenv';
import { PrismaGetFlightsRepository } from './repositories/get-flights/prisma-get-flights';
import { GetFlightsController } from './controllers/get-flights/get-flights';
import { PrismaConnector } from './database/prisma';

const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  await PrismaConnector.connect();

  app.get('/flights/:departingFrom', async (req, res) => {
    const { departingFrom } = req.params;

    console.log(departingFrom);

    const prismaGetFlightsRepository = new PrismaGetFlightsRepository();

    const getFlightsController = new GetFlightsController(
      prismaGetFlightsRepository
    );

    const { body, statusCode } = await getFlightsController.findFlight(
      departingFrom
    );

    res.send(body).status(statusCode);
  });

  app.get('/flights', async (req, res) => {
    const prismaGetFlightsRepository = new PrismaGetFlightsRepository();

    const getFlightsController = new GetFlightsController(
      prismaGetFlightsRepository
    );

    const { body, statusCode } = await getFlightsController.handle();

    res.send(body).status(statusCode);
  });

  const port = process.env.PORT;
  app.listen(port, () => console.log(`Listening on port ${port}`));
};

main();
