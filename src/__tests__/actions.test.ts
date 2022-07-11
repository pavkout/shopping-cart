import { Product } from '../types';
import {
  addToCart,
  increaseCartQuantity,
  removeFromCart,
  resetCart,
  subtractCartQuantity,
} from '../state/actions';
import {
  ADD_TO_CART,
  INCREASE_CART_QUANTITY,
  REMOVE_FROM_CART,
  RESET_CART,
  SUBTRACT_CART_QUANTITY,
} from '../state/types';

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

// Create a test product for test.
const testProduct = Object.freeze({
  ...cart[0],
  quantity: 1,
});

// Create a test id for test.
const testGtin = testProduct.gtin;

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

  it('resetCart has the correct type', () => {
    action = resetCart();
    expect(action.type).toEqual(RESET_CART);
  });
});
