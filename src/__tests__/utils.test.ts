import {
  formatPrice,
  generateRandom,
  calculateAmountWithQuantity,
} from '../utils';

describe('Test Utils', () => {
  it('formatPrice not null', () => {
    expect(formatPrice('€', 55.55)).not.toBeNull();
  });

  it('formatPrice equal 55.55€', () => {
    expect(formatPrice('€', 55.55)).toEqual('55.55€');
  });

  it('generateRandom not null', () => {
    expect(generateRandom(1, 5, 1)).not.toBeNull();
  });

  it('generateRandom has correct result', () => {
    const random = generateRandom(1, 5, 1);
    expect(random).toEqual(random);
  });

  it('calculateAmountWithQuantity not null', () => {
    expect(calculateAmountWithQuantity(1, 5)).not.toBeNull();
  });

  it('calculateAmountWithQuantity equal 72.5', () => {
    expect(calculateAmountWithQuantity(14.5, 5)).toEqual(72.5);
  });
});
