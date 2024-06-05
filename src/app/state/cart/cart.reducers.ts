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
    products: removeProduct(state.products, id),
  })),
  on(resetCart, state => ({
    ...state,
    products: [],
  }))
);

function removeProduct(products: Product[], productID: number): Product[] {
  const temp = [...products];
  const indexRemove = temp.findIndex(product => product.id === productID);
  if (indexRemove > -1) {
    temp.splice(indexRemove, 1);
  }
  return temp;
}
