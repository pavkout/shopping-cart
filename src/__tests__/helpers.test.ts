import {
  addProductToCart,
  removeProductFromCart,
  increaseQuantity,
  increaseProductQuantity,
  subtractQuantity,
  subtractProductQuantity,
  increaseTotalPrice,
  subtractTotalPrice,
} from '../state/helpers';
import { Product } from '../types';

const cart = [
  {
    name: 'Parodontax Duplo Herbal Fresh 75ml',
    gtin: '5054563079435',
    recommendedRetailPrice: 29.99,
    recommendedRetailPriceCurrency: '€',
    imageUrl:
      'https://images.qogita.com/files/images/variants/aB9r5isuPDUTTD3nLNsXvQ.jpg',
    brandName: 'Parodontax',
    categoryName: 'Toothpaste',
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
  },
];

const product = {
  name: 'Carolina Herrera 212 Sexy M - 50ml - Eau De Toilette',
  gtin: '8411061865613',
  recommendedRetailPrice: 58.99,
  recommendedRetailPriceCurrency: '€',
  imageUrl:
    'https://images.qogita.com/files/images/variants/ihg95mgSVfDU7yUSECr74y.jpg',
  brandName: 'Carolina Herrera',
  categoryName: "Men's Perfume",
};

const existProduct = {
  name: 'Snowracer Classic - Sled - Black',
  gtin: '7313327300382',
  recommendedRetailPrice: 90.49,
  recommendedRetailPriceCurrency: '€',
  imageUrl:
    'https://images.qogita.com/files/images/variants/jLSEtd5DRU72VXf7ScZ2m9.jpg',
  brandName: 'Stiga',
  categoryName: 'Sledding',
};

describe('Helpers Test', () => {
  it('addProductToCart correctly added the new product', () => {
    expect(addProductToCart(cart, product)).toEqual([...cart, product]);
  });

  it('addProductToCart has correct length', () => {
    expect(addProductToCart(cart, product).length).toEqual(
      [...cart, product].length
    );
  });

  it('addProductToCart correctly added an existing product', () => {
    const newCart = cart.map((p: Product) => {
      if (p.gtin === existProduct.gtin) {
        p.quantity = increaseQuantity(p.quantity, 1);
      }
      return p;
    });

    expect(addProductToCart(cart, existProduct)).toEqual(newCart);
  });

  it('increaseQuantity has correct result', () => {
    expect(increaseQuantity(1, 1)).toEqual(2);
  });

  it('increaseQuantity has correct result (with default values)', () => {
    expect(increaseQuantity()).toEqual(1);
  });

  it('increaseProductQuantity has correct result', () => {
    const gtin = '5054563079435';
    const quantity = 5;

    const newCart = cart.map((p: Product) => {
      if (p.gtin === gtin) {
        p.quantity = increaseQuantity(p.quantity, quantity);
      }
      return p;
    });

    expect(increaseProductQuantity(cart, gtin, quantity)).toEqual(newCart);
  });

  it('removeProductFromCart has correct result', () => {
    const gtin = '5054563079435';
    const newCart = cart.filter((p: Product) => p.gtin !== gtin);

    expect(removeProductFromCart(cart, gtin)).toEqual(newCart);
  });

  it('removeProductFromCart has correct length', () => {
    const gtin = '5054563079435';
    const newCart = cart.filter((p: Product) => p.gtin !== gtin);

    expect(removeProductFromCart(cart, gtin).length).toEqual(newCart.length);
  });

  it('removeProductFromCart has correct length', () => {
    const gtin = '5054563079435';
    const newCart = cart.filter((p: Product) => p.gtin !== gtin);

    expect(removeProductFromCart(cart, gtin).length).toEqual(newCart.length);
  });

  it('subtractQuantity has correct result', () => {
    expect(subtractQuantity(1, 1)).toEqual(0);
  });

  it('subtractQuantity has correct result (with default values)', () => {
    expect(subtractQuantity()).toEqual(0);
  });

  it('subtractQuantity has correct result (5 - 2)', () => {
    expect(subtractQuantity(5, 2)).toEqual(3);
  });

  it('subtractProductQuantity has correct result', () => {
    const gtin = '5054563079435';
    const quantity = 1;

    const newCart = cart
      .map((p: Product) => {
        if (p.gtin === gtin) {
          p.quantity = subtractQuantity(p.quantity, quantity);
        }
        return p;
      })
      .filter((p: Product) => p.quantity !== 0);

    expect(subtractProductQuantity(cart, gtin, quantity)).toEqual(newCart);
  });

  it('increaseTotalPrice has correct result (with default values)', () => {
    expect(increaseTotalPrice(55)).toEqual(55);
  });

  it('increaseTotalPrice has correct result (55 + 15 * 2)', () => {
    expect(increaseTotalPrice(55, 15, 2)).toEqual(85);
  });

  it('subtractTotalPrice has correct result (with default values)', () => {
    expect(subtractTotalPrice(50)).toEqual(50);
  });

  it('subtractTotalPrice has correct result (50 - 15 * 2)', () => {
    expect(subtractTotalPrice(50, 15, 2)).toEqual(20);
  });

  it('subtractTotalPrice has correct result (50 - 15 * 2)', () => {
    expect(subtractTotalPrice(50, 15, 4)).toEqual(0);
  });
});
