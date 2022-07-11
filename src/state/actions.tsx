import { IState, Product } from '../types';
import {
  ADD_TO_CART,
  INCREASE_CART_QUANTITY,
  INIT_CART,
  REMOVE_FROM_CART,
  RESET_CART,
  SUBTRACT_CART_QUANTITY,
} from './types';

export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (gtin: string) => ({
  type: REMOVE_FROM_CART,
  payload: gtin,
});

export const increaseCartQuantity = (gtin: string) => ({
  type: INCREASE_CART_QUANTITY,
  payload: gtin,
});

export const subtractCartQuantity = (gtin: string) => ({
  type: SUBTRACT_CART_QUANTITY,
  payload: gtin,
});

export const resetCart = () => ({
  type: RESET_CART,
});

export const initCart = (cart: IState) => ({
  type: INIT_CART,
  payload: cart,
});
