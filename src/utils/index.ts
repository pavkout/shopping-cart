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
