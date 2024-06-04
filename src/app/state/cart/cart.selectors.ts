import { createSelector } from '@ngrx/store';
import { CartState } from './cart.reducers';
import { AppState } from '../app.state';

export const selectProduct = (state: AppState) => state.cart;
export const selectProducts = createSelector(selectProduct, (state: CartState) => state.products);
