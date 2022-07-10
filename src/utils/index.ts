/**
 * This function format the given amount to have two decimal digits following with the currency code.
 * @param param The given amount and currency code.
 * @returns The returned formated price.
 */
export const formatPrice = (currencyCode: string, amount: number): string => {
  return `${amount.toFixed(2)}${currencyCode}`;
};

/**
 * This function generate random numbers for raviews.
 * @param min The minimum value.
 * @param max The maximun value.
 * @param step The step value.
 * @returns The generated random number.
 */
export const generateRandom = (min: number, max: number, step: number) => {
  const randomNum = min + Math.random() * (max - min);
  return Math.round(randomNum / step) * step;
};

/**
 * Calculate the amount of money by adding the quantity to the product.
 * @param amount The amount per product.
 * @param quantity The quantity.
 * @returns The result of amount.
 */
export const calculateAmountWithQuantity = (
  amount: number,
  quantity: number = 1
): number => Math.round(amount * quantity * 100) / 100;

/**
 * Scroll to the top of the window.
 */
export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
