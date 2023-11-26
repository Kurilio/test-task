import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductsState } from '../types/types';

const initialState: IProductsState = {
  products: [],
  basket: [],
};

export const productSlice = createSlice({
  name: 'products',

  initialState,
  reducers: {
    setProduct: (state: IProductsState, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    addToBasket: (state: IProductsState, action: PayloadAction<IProduct>) => {
      state.basket.push(action.payload);
    },
    clearBasket: (state: IProductsState) => {
      state.basket = [];
    },
  },
});

export const { setProduct, addToBasket, clearBasket } = productSlice.actions;
export default productSlice.reducer;
