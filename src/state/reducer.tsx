import { ActionType, IState, Product } from '../types';
import { initialState } from './initialState';
import {
  addProductToCart,
  increaseProductQuantity,
  increaseQuantity,
  removeProductFromCart,
  subtractProductQuantity,
  subtractQuantity,
  increaseTotalPrice,
  subtractTotalPrice,
} from './helpers';
import {
  ADD_TO_CART,
  INCREASE_CART_QUANTITY,
  RESET_CART,
  SUBTRACT_CART_QUANTITY,
  REMOVE_FROM_CART,
} from './types';

const Reducer = (state: IState, action: ActionType): any => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: addProductToCart(state.cart, action.payload as Product),
        totalItems: increaseQuantity(
          state.totalItems,
          (action.payload as Product).quantity
        ),
        totalPrice: increaseTotalPrice(
          state.totalPrice,
          (action.payload as Product).recommendedRetailPrice,
          (action.payload as Product).quantity
        ),
      };
    case REMOVE_FROM_CART: {
      // Find the product in order to get the quantity.
      let product: Product | undefined = state.cart.find(
        (p) => p.gtin === action.payload
      );

      return {
        ...state,
        cart: removeProductFromCart(state.cart, action.payload as string),
        totalItems: subtractQuantity(state.totalItems, product?.quantity),
        totalPrice: subtractTotalPrice(
          state.totalPrice,
          product?.recommendedRetailPrice,
          product?.quantity
        ),
      };
    }
    case INCREASE_CART_QUANTITY: {
      // Find the product in order to get the quantity.
      let product = state.cart.find((p) => p.gtin === action.payload);

      return {
        ...state,
        cart: increaseProductQuantity(state.cart, action.payload as string),
        totalItems: increaseQuantity(state.totalItems),
        totalPrice: increaseTotalPrice(
          state.totalPrice,
          product?.recommendedRetailPrice
        ),
      };
    }
    case SUBTRACT_CART_QUANTITY: {
      // Find the product in order to get the quantity.
      let product = state.cart.find((p) => p.gtin === action.payload);

      return {
        ...state,
        cart: subtractProductQuantity(state.cart, action.payload as string),
        totalItems: subtractQuantity(state.totalItems),
        totalPrice: subtractTotalPrice(
          state.totalPrice,
          product?.recommendedRetailPrice
        ),
      };
    }
    case RESET_CART:
      return initialState;
    default:
      return state;
  }
};

export default Reducer;
