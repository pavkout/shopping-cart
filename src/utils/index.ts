/**
 * This function format the given amount to have two decimal digits following with the currency code.
 * @param param The given amount and currency code.
 * @returns The returned formated price.
 */
export const formatPrice = (currencyCode: string, amount: number): string => {
  return `${amount.toFixed(2)}${currencyCode}`;
};
