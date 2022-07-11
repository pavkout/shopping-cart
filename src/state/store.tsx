import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import Reducer from './reducer';
import { ContextType } from '../types';
import { initialState } from './initialState';
import { initCart } from './actions';

/**
 * React Context-based Global Store with a reducer
 **/
export function Store({ children }: { children: ReactNode }): ReactElement {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem('state');

    if (item && JSON.parse(item)) {
      // Checking if there already is a state in localstorage, if yes, update the current state with the stored one
      dispatch(initCart(JSON.parse(item)));
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      // Create and/or set a new localstorage variable called "state"
      localStorage.setItem('state', JSON.stringify(state));
    }
  }, [state]);

  return (
    <ShoppingContext.Provider value={contextValue}>
      {children}
    </ShoppingContext.Provider>
  );
}

export const ShoppingContext = createContext({} as ContextType);

export function useAppContext() {
  return useContext(ShoppingContext);
}
