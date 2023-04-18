import { FlightSearch } from '../../models/models-ticket';
import { HttpResponse } from '../protocols';
import { IGetFlightsController, IGetFlightsRepository } from './protocols';

export class GetFlightsController implements IGetFlightsController {
  constructor(private readonly getFlightsRepository: IGetFlightsRepository) {}

  async findFlight(
    travelDate: string,
    departingFrom: string,
    arrivingAt: string,
    numberOfPassengers: number,
    seatType: string
  ): Promise<HttpResponse<FlightSearch[]>> {
    try {
      const flights = await this.getFlightsRepository.listFlights(
        travelDate,
        departingFrom,
        arrivingAt,
        numberOfPassengers,
        seatType
      );

      return {
        statusCode: 200,
        body: flights,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong.',
      };
    }
  }
}
