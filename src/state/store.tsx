import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import Reducer from './reducer';
import { ContextType } from '../types';
import { initialState } from './initialState';

/**
 * React Context-based Global Store with a reducer
 **/
export function Store({ children }: { children: ReactNode }): ReactElement {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <ShoppingContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingContext.Provider>
  );
}

export const ShoppingContext = createContext({} as ContextType);

export function useAppContext() {
  return useContext(ShoppingContext);
}
