import { IGetFlightsRepository } from '../../controllers/get-flights/protocols';
import { FlightSearch } from '../../models/models-ticket';
import { HttpResponse } from '../../controllers/protocols';
import { ResponseTicket } from '../../models/models-response';

export class PrismaGetFlightsRepository implements IGetFlightsRepository {
  async listFlights(
    travelDate: string,
    departingFrom: string,
    arrivingAt: string,
    numberOfPassengers: number,
    seatType: string
  ): Promise<any> {
    const fakeApi = [
      {
        flightNumber: 'AZU1234',
        airline: 'Azul Linhas Aéreas',
        category: 'econômica',
        seatsAvailableTotal: 150,
        seatsAvailableAtSeatType: {
          econômica: 100,
          executivo: 20,
          '1a. classe': 30,
        },
        price: 500.0,
        departingFrom: 'São Paulo',
        arrivingAt: 'Rio de Janeiro',
        travelDate: '2023-05-01',
      },
      {
        flightNumber: 'GLO5678',
        airline: 'Gol Linhas Aéreas',
        category: 'executivo',
        seatsAvailableTotal: 100,
        seatsAvailableAtSeatType: {
          econômica: 50,
          executivo: 40,
          '1a. classe': 10,
        },
        price: 1200.0,
        departingFrom: 'Belo Horizonte',
        arrivingAt: 'Brasília',
        travelDate: '2023-05-02',
      },
      {
        flightNumber: 'TAM9012',
        airline: 'Latam Linhas Aéreas',
        category: '1a. classe',
        seatsAvailableTotal: 40,
        seatsAvailableAtSeatType: {
          econômica: 0,
          executivo: 10,
          '1a. classe': 30,
        },
        price: 3000.0,
        departingFrom: 'Rio de Janeiro',
        arrivingAt: 'São Paulo',
        travelDate: '2023-05-03',
      },
    ];

    return fakeApi.map((flight) => ({
      travelDate: flight.travelDate,
      departingFrom: flight.departingFrom,
      arrivingAt: flight.arrivingAt,
      numberOfPassengers: 10,
      seatType: flight.category,
    }));
  }
}
