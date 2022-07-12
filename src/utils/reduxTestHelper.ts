import { initialState } from '../state/initialState';
import { ActionType, IState, Product } from '../types';

/**
 * Use this function to test your reducers. You can select what you want to test
 * by passing the corresponding states. It implements the Builder pattern:
 * http://tinyurl.com/h9hgpw7
 *
 * For example to test a reducer on a required action you can do the following:
 * test(reducer)
 *   .onAction({
 *     type: ADD_TO_CART,
 *     payload: {
 *       name: 'Snowracer Classic - Sled - Black',
 *       gtin: '7313327300382',
 *       recommendedRetailPrice: 90.49,
 *       recommendedRetailPriceCurrency: '€',
 *       imageUrl:
 *         'https://images.qogita.com/files/images/variants/jLSEtd5DRU72VXf7ScZ2m9.jpg',
 *       brandName: 'Stiga',
 *       categoryName: 'Sledding',
 *     }
 *   })
 *   .withCurrentState([{ cart: [], totalItems: 0, totalPrice: 0 }])
 *   .withDesiredState(...)
 *   .run();
 *
 * Here's how to test a reducer on unknown action type:
 * test(reducer).withCurrentState(initialState).run();
 *
 * This previous is equivalent to:
 * it('handles action with unknown type', () => {
 *  return expect(reducer(initialState, {})).toEqual(currentState);
 * });
 */
export default function test(reducer: any) {
  let action: any = null;
  let currentState: IState = initialState;
  let desiredState: IState = initialState;
  let comment = action
    ? `handles action of type ${action.type}`
    : 'handles action with unknown type';

  return {
    /**
     * Set an action object to test
     */
    onAction(object: ActionType) {
      action = object;
      comment = object.type ? `handles action of type ${object.type}` : comment;

      return this;
    },
    /**
     * You can set the current state
     */
    withCurrentState(state: IState) {
      currentState = state;

      return this;
    },
    /**
     * This object represets the result of the reducer with the given action
     */
    withDesiredState(state: IState) {
      desiredState = state;

      return this;
    },
    /**
     * You can customize your output by setting the comment you want to appear
     * in the console
     */
    withComment(text = '') {
      comment = text;

      return this;
    },
    /**
     * This function will run the unit test with the given settings
     */
    run() {
      it(comment, () => {
        // When we have a previous state we use Object.freeze to check for unesessary
        // mutations
        if (currentState) {
          Object.freeze(currentState);
        }

        // If we don't provdie an action we just check if the reducer handles it properly
        if (!action) {
          return expect(reducer(initialState, {})).toEqual(currentState);
        }

        return expect(reducer(currentState, action)).toEqual(desiredState);
      });
    },
  };
}

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

export { cart, product, testState, testProduct, testGtin };
