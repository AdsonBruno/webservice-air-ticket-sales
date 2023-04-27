export interface ResponseTicket {
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  category: string;

  price: number;
}
