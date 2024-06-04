import { createReducer, on } from '@ngrx/store';
import { Product } from '../../interfaces/product.interface';
import { addToCart, removeFromCart, resetCart } from './cart.actions';

export interface CartState {
  products: Product[];
}

export const initialState: CartState = {
  products: [],
};


export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(removeFromCart, (state, { id }) => ({
    ...state,
    products: state.products.filter(product => product.id !== id),
  })),
  on(resetCart, (state) => ({
    ...state,
    products: []
  }))
);
