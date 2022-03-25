export type Car = {
  id: number;
  make: string;
  model: string;
  price: number;
  thumbnail: string;
};

export interface CarsState {
  cars: Car[];
}
