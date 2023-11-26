import { store } from '../store';

export interface IProduct {
  id: number;
  img: string;
  name: string;
  description: string;
  price: number;
}

export interface IProductsState {
  products: IProduct[];
  basket: IProduct[];
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
