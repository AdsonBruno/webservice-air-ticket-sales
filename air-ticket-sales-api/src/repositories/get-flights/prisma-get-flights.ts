import { IGetFlightsRepository } from '../../controllers/get-flights/protocols';
import { ResponseTicket } from '../../models/models-response';
import { PrismaClient, Flights as PrismaFlightsModel } from '@prisma/client';

export class PrismaGetFlightsRepository implements IGetFlightsRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async listFlights(
    departingFrom: string,
    arrivingAt: string
  ): Promise<ResponseTicket[]> {
    const flights: PrismaFlightsModel[] = await this.prisma.flights.findMany({
      where: {
        origin: departingFrom,
        destination: arrivingAt,
      },
    });

    console.log(flights);

    return flights.map((flight: PrismaFlightsModel) => ({
      flightNumber: flight.flight_id,
      airline: flight.airline,
      origin: flight.origin,
      destination: flight.destination,
      departureTime: flight.departure_time,
      arrivalTime: flight.arrival_time,
      price: 1500,
      category: '1ª classe',
    }));
  }

  async listAllFlights(): Promise<ResponseTicket[]> {
    const flights = await this.prisma.flights.findMany();

    return flights.map((flights: PrismaFlightsModel) => ({
      flightNumber: flights.flight_id,
      airline: flights.airline,
      origin: flights.origin,
      destination: flights.destination,
      departureTime: flights.departure_time,
      arrivalTime: flights.arrival_time,
      category: 'Econômica',
      price: 150,
    }));
  }
}
