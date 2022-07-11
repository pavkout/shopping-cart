import reducer from '../state/reducer';
import { initialState } from '../state/initialState';

import test from '../utils/reduxTestHelper';

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
} from '../state/actions';
import { IState, Product } from '../types';

// Create a cart for test.
const cart: Product[] = [
  {
    name: 'Parodontax Duplo Herbal Fresh 75ml',
    gtin: '5054563079435',
    recommendedRetailPrice: 29.99,
    recommendedRetailPriceCurrency: '€',
    imageUrl:
      'https://images.qogita.com/files/images/variants/aB9r5isuPDUTTD3nLNsXvQ.jpg',
    brandName: 'Parodontax',
    categoryName: 'Toothpaste',
    quantity: 1,
  },
  {
    name: 'Poseidon The Black Men Edt Vapo 150 Ml - Beauty & Health',
    gtin: '8411047151242',
    recommendedRetailPrice: 22.99,
    recommendedRetailPriceCurrency: '€',
    imageUrl:
      'https://images.qogita.com/files/images/variants/co8e7Y9gf272e2W2LgA6fj.jpg',
    brandName: 'Instituto Espanol',
    categoryName: "Men's Perfume",
    quantity: 1,
  },
  {
    name: 'Snowracer Classic - Sled - Black',
    gtin: '7313327300382',
    recommendedRetailPrice: 90.49,
    recommendedRetailPriceCurrency: '€',
    imageUrl:
      'https://images.qogita.com/files/images/variants/jLSEtd5DRU72VXf7ScZ2m9.jpg',
    brandName: 'Stiga',
    categoryName: 'Sledding',
    quantity: 1,
  },
];

// Create a product for test.
const product: Product = {
  name: 'Carolina Herrera 212 Sexy M - 50ml - Eau De Toilette',
  gtin: '8411061865613',
  recommendedRetailPrice: 58.99,
  recommendedRetailPriceCurrency: '€',
  imageUrl:
    'https://images.qogita.com/files/images/variants/ihg95mgSVfDU7yUSECr74y.jpg',
  brandName: 'Carolina Herrera',
  categoryName: "Men's Perfume",
};

// Create a test state for test.
const testState: IState = Object.freeze({
  cart,
  totalItems: cart.length,
  totalPrice: cart.reduce(
    (a: any, b: Product) => a + b.recommendedRetailPrice,
    0
  ),
});

// Create a test product for test.
const testProduct = Object.freeze({
  ...cart[0],
  quantity: 1,
});

// Create a test id for test.
const testGtin = testProduct.gtin;

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

  // Test the RESET_CART Action
  test(reducer)
    .onAction(resetCart())
    .withCurrentState(testState)
    .withDesiredState({
      ...initialState,
    })
    .run();
});
