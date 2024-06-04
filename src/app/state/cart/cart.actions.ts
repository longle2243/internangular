import { createAction, props } from '@ngrx/store';
import { Product } from '../../interfaces/product.interface';

export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ product: Product }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ id: number }>()
);

export const resetCart = createAction(
  '[Cart] Reset Cart',
)