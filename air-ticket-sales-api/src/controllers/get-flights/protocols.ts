import { FlightSearch } from '../../models/models-ticket';
import { HttpResponse } from '../protocols';

export interface IGetFlightsController {
  findFlight(
    travelDate: string,
    departingFrom: string,
    arrivingAt: string,
    numberOfPassengers: number,
    seatType: string
  ): Promise<HttpResponse<FlightSearch[]>>;
}

export interface IGetFlightsRepository {
  listFlights(
    travelDate: string,
    departingFrom: string,
    arrivingAt: string,
    numberOfPassengers: number,
    seatType: string
  ): Promise<FlightSearch[]>;
}
