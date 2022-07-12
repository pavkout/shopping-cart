import {
  addToCart,
  closeCart,
  increaseCartQuantity,
  initCart,
  openCart,
  removeFromCart,
  resetCart,
  subtractCartQuantity,
} from '../state/actions';
import {
  ADD_TO_CART,
  CLOSE_CART,
  INCREASE_CART_QUANTITY,
  INIT_CART,
  OPEN_CART,
  REMOVE_FROM_CART,
  RESET_CART,
  SUBTRACT_CART_QUANTITY,
} from '../state/types';
import { product, testGtin, testState } from '../utils/reduxTestHelper';

// Create flag to store the active action.
let action;

describe('Cart Reducer', () => {
  it('addToCart has the correct type', () => {
    action = addToCart(product);
    expect(action.type).toEqual(ADD_TO_CART);
  });

  it('addToCart the correct payload', () => {
    action = addToCart(product);
    expect(action.payload).toEqual(product);
  });

  it('removeFromCart has the correct type', () => {
    action = removeFromCart(testGtin);
    expect(action.type).toEqual(REMOVE_FROM_CART);
  });

  it('removeFromCart the correct payload', () => {
    action = removeFromCart(testGtin);
    expect(action.payload).toEqual(testGtin);
  });

  it('increaseCartQuantity has the correct type', () => {
    action = increaseCartQuantity(testGtin);
    expect(action.type).toEqual(INCREASE_CART_QUANTITY);
  });

  it('increaseCartQuantity the correct payload', () => {
    action = increaseCartQuantity(testGtin);
    expect(action.payload).toEqual(testGtin);
  });

  it('subtractCartQuantity has the correct type', () => {
    action = subtractCartQuantity(testGtin);
    expect(action.type).toEqual(SUBTRACT_CART_QUANTITY);
  });

  it('subtractCartQuantity the correct payload', () => {
    action = subtractCartQuantity(testGtin);
    expect(action.payload).toEqual(testGtin);
  });

  it('initCart has the correct type', () => {
    action = initCart(testState);
    expect(action.type).toEqual(INIT_CART);
  });

  it('initCart the correct payload', () => {
    action = initCart(testState);
    expect(action.payload).toEqual(testState);
  });

  it('resetCart has the correct type', () => {
    action = resetCart();
    expect(action.type).toEqual(RESET_CART);
  });

  it('openCart has the correct type', () => {
    action = openCart();
    expect(action.type).toEqual(OPEN_CART);
  });

  it('closeCart has the correct type', () => {
    action = closeCart();
    expect(action.type).toEqual(CLOSE_CART);
  });
});
