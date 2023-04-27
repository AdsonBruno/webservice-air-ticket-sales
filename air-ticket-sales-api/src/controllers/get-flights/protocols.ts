import { ResponseTicket } from '../../models/models-response';
import { HttpResponse } from '../protocols';

export interface IGetFlightsController {
  findFlight(
    travelDate: string,
    departingFrom: string,
    arrivingAt: string,
    numberOfPassengers: number,
    seatType: string
  ): Promise<HttpResponse<ResponseTicket[]>>;
}

export interface IGetFlightsRepository {
  listFlights(
    departingFrom: string,
    arrivingAt?: string
  ): Promise<ResponseTicket[]>;

  listAllFlights(): Promise<ResponseTicket[]>;
}
