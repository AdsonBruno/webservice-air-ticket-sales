import { ResponseTicket } from '../../models/models-response';
import { HttpResponse } from '../protocols';
import { IGetFlightsController, IGetFlightsRepository } from './protocols';

export class GetFlightsController implements IGetFlightsController {
  constructor(private readonly getFlightsRepository: IGetFlightsRepository) {}

  async handle() {
    try {
      const flights = await this.getFlightsRepository.listAllFlights();

      return {
        statusCode: 200,
        body: flights,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Algo deu errado!',
      };
    }
  }

  async findFlight(
    departingFrom: string,
    arrivingAt?: string
  ): Promise<HttpResponse<ResponseTicket[]>> {
    try {
      const flights = await this.getFlightsRepository.listFlights(
        departingFrom,
        arrivingAt
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
