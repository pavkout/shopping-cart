import reducer from '../state/reducer';
import { initialState } from '../state/initialState';

import test, {
  product,
  testGtin,
  testProduct,
  testState,
} from '../utils/reduxTestHelper';

import {
  addProductToCart,
  increaseProductQuantity,
  increaseQuantity,
  increaseTotalPrice,
  removeProductFromCart,
  subtractProductQuantity,
  subtractQuantity,
  subtractTotalPrice,
} from '../state/helpers';
import {
  addToCart,
  increaseCartQuantity,
  removeFromCart,
  resetCart,
  subtractCartQuantity,
  initCart,
  closeCart,
  openCart,
} from '../state/actions';

describe('Cart Reducer', () => {
  // Test the reucer on unknown action
  test(reducer).withCurrentState(initialState).run();

  // Test the ADD_TO_CART action
  test(reducer)
    .onAction(addToCart(product))
    .withCurrentState(initialState)
    .withDesiredState({
      ...initialState,
      cart: addProductToCart(initialState.cart, product),
      totalItems: increaseQuantity(initialState.totalItems),
      totalPrice: increaseTotalPrice(
        initialState.totalPrice,
        product.recommendedRetailPrice
      ),
    })
    .run();

  // Test the REMOVE_FROM_CART Action
  test(reducer)
    .onAction(removeFromCart(testGtin))
    .withCurrentState(testState)
    .withDesiredState({
      ...testState,
      cart: removeProductFromCart(testState.cart, testGtin),
      totalItems: subtractQuantity(testState.totalItems),
      totalPrice: subtractTotalPrice(
        testState.totalPrice,
        testProduct.recommendedRetailPrice,
        testProduct.quantity
      ),
    })
    .run();

  // Test the INCREASE_CART_QUANTITY Action
  test(reducer)
    .onAction(increaseCartQuantity(testGtin))
    .withCurrentState(testState)
    .withDesiredState({
      ...testState,
      cart: increaseProductQuantity(testState.cart, testGtin),
      totalItems: increaseQuantity(testState.totalItems),
      totalPrice: increaseTotalPrice(
        testState.totalPrice,
        testProduct.recommendedRetailPrice
      ),
    })
    .run();

  // Test the SUBTRACT_CART_QUANTITY Action
  test(reducer)
    .onAction(subtractCartQuantity(testGtin))
    .withCurrentState(testState)
    .withDesiredState({
      ...testState,
      cart: subtractProductQuantity(testState.cart, testGtin),
      totalItems: subtractQuantity(testState.totalItems),
      totalPrice: subtractTotalPrice(
        testState.totalPrice,
        testProduct.recommendedRetailPrice
      ),
    })
    .run();

  // Test the INIT_CART Action
  test(reducer)
    .onAction(initCart(testState))
    .withCurrentState(initialState)
    .withDesiredState({
      ...testState,
    })
    .run();

  // Test the OPEN_CART Action
  test(reducer)
    .onAction(openCart())
    .withCurrentState(testState)
    .withDesiredState({
      ...testState,
      isCartOpen: true,
    })
    .run();

  // Test the CLOSE_CART Action
  test(reducer)
    .onAction(closeCart())
    .withCurrentState(testState)
    .withDesiredState({
      ...testState,
      isCartOpen: false,
    })
    .run();

  // Test the RESET_CART Action
  test(reducer)
    .onAction(resetCart())
    .withCurrentState(testState)
    .withDesiredState({
      ...initialState,
    })
    .run();
});
