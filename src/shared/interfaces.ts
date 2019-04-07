export interface ITopping {
  name: string;
  price: number;
}

export interface IPizza {
  id: string;
  price: number;
  toppings: ITopping[];
}
