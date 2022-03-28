export type Car = {
  id: number;
  make: string;
  makeLogo: string;
  model: string;
  price: number;
  thumbnail: string;
  colors: {
    color: string;
    photo: string;
  }[];
};

export interface CarsState {
  cars: Car[];
}
