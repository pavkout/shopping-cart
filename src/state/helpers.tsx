import { Product } from '../types';
import { calculateAmountWithQuantity } from '../utils';

/**
 * This function adds a new product to the existing product list.
 * @param cart The exist product list.
 * @param product The new product to add.
 * @returns A new list with products.
 */
export const addProductToCart = (
  cart: Product[],
  product: Product
): Product[] => {
  // Find the product in order to get the quantity.
  let existProduct = cart.find((p) => p.gtin === product.gtin);

  // If the product is already in the cart that just update the quantity.
  if (existProduct) {
    return increaseProductQuantity(cart, product.gtin, product.quantity);
  }

  return [...cart, product];
};

/**
 * This function remove the given product from the existing product list.
 * @param cart The exist product list.
 * @param gtin The remove product id.
 * @returns The new calculated product list.
 */
export const removeProductFromCart = (
  cart: Product[],
  gtin: string
): Product[] => cart.filter((p: Product) => p.gtin !== gtin);

/**
 * This function adds two given numbers.
 * @param num1 The first number to add.
 * @param num2 The second number to add.
 * @returns The new result.
 */
export const increaseQuantity = (num1: number, num2: number = 1): number =>
  num1 + num2;

/**
 * This function adds the given quantity to the given product id from the given list of products.
 * @param cart The exist product list.
 * @param gtin The id of the product to change the quantity to.
 * @param num The quantity to add.
 * @returns The new calculated product list.
 */
export const increaseProductQuantity = (
  cart: Product[],
  gtin: string,
  num: number = 1
): Product[] =>
  cart.map((p: Product) => {
    if (p.gtin === gtin) {
      p.quantity = increaseQuantity(p.quantity, num);
    }
    return p;
  });

/**
 * This function subtract two given numbers.
 * @param num1 The first number to subtract.
 * @param num2 The second number to subtract.
 * @returns The new result.
 */
export const subtractQuantity = (num1: number, num2: number = 1): number => {
  // Check first of all if the subtract value is negative then return zero.
  if (num1 - num2 < 0) return 0;

  return num1 - num2;
};

/**
 * This function subtract the given quantity to the given product id from the given list of products.
 * @param cart The exist product list.
 * @param gtin The id of the product to change the quantity to.
 * @param num The quantity to add.
 * @returns The new calculated product list.
 */
export const subtractProductQuantity = (
  cart: Product[],
  gtin: string,
  num: number = 1
): Product[] =>
  cart
    .map((p: Product) => {
      if (p.gtin === gtin) {
        p.quantity = subtractQuantity(p.quantity, num);
      }
      return p;
    })
    .filter((p: Product) => p.quantity !== 0);

/**
 * This function increase the total price by given amount and the given quantity.
 * @param totalPrice The total price.
 * @param amount The amount to increase the price by.
 * @param quantity The quantity to increase.
 * @returns The new calculated price.
 */
export const increaseTotalPrice = (
  totalPrice: number,
  amount: number = 0,
  quantity: number = 1
): number => {
  return totalPrice + calculateAmountWithQuantity(amount, quantity);
};

/**
 * This function subtract the total price by given amount and the given quantity.
 * @param totalPrice The total price.
 * @param amount The amount to subtract the price by.
 * @param quantity The quantity to subtract.
 * @returns The new calculated price.
 */
export const subtractTotalPrice = (
  totalPrice: number,
  amount: number = 0,
  quantity: number = 1
): number => {
  // Make the calculation of the price
  const calc = totalPrice - calculateAmountWithQuantity(amount, quantity);

  // If the result is negative, the return zero otherwise the calculated result.
  return calc < 0 ? 0 : calc;
};
