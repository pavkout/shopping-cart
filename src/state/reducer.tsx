import { ActionType, IState, Product } from '../types';
import { initialState } from './initialState';
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
        cart: [...state.cart, action.payload],
        totalItems: state.totalItems + 1,
      };
    case REMOVE_FROM_CART: {
      let newCart = state.cart.filter(
        (p: Product) => p.gtin !== action.payload
      );

      return {
        ...state,
        cart: newCart,
      };
    }
    case INCREASE_CART_QUANTITY: {
      let newState = state.cart.map((p: Product) => {
        if (p.gtin === action.payload) {
          p.quantity += 1;
        }
        return p;
      });

      return {
        ...state,
        cart: newState,
        totalItems: state.totalItems + 1,
      };
    }
    case SUBTRACT_CART_QUANTITY: {
      let newCart = state.cart.map((p: Product) => {
        if (p.gtin === action.payload) {
          p.quantity -= 1;
        }
        return p;
      });

      return {
        ...state,
        cart: newCart.filter((p: Product) => p.quantity !== 0),
        totalItems: state.totalItems - 1,
      };
    }
    case RESET_CART:
      return initialState;
    default:
      return state;
  }
};

export default Reducer;
