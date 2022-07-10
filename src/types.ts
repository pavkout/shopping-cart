import { Dispatch } from 'react';

export type Product = {
  name: string;
  gtin: string;
  recommendedRetailPrice: number;
  recommendedRetailPriceCurrency: string;
  imageUrl: string;
  brandName: string;
  categoryName: string;
  quantity: number;
};

/**
 * The response type of errors from /api/*.
 */
export type ErrorResponse = string;

/**
 * The response type of /api/products
 */
export type ProductsResponse = {
  count: number;
  page: number;
  results: Product[];
};

/**
 * The response type of /api/products/[gtin].
 */
export type ProductResponse = Product;
export interface IState {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  state: IState;
  dispatch: Dispatch<ActionType>;
};
