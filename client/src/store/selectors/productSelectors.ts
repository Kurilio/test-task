import { RootState } from '../types/types';

export const getProducts = (state: RootState) => state.productSlice.products;

export const basketProducts = (state: RootState) => state.productSlice.basket;
