import { Product } from '../types';

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
 * @returns The new culculated product list.
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
 * @returns The new culculated product list.
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
 * @returns The new culculated product list.
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
