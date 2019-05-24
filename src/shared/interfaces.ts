export interface ITopping {
  id: number;
  name: string;
  price: number;
}

export interface IPizza {
  id: string;
  price: number;
  toppings: ITopping[];
}
