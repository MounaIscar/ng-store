export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  brand: string;
  //rating: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}
