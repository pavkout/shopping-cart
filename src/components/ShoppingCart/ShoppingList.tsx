import { useContext } from 'react';

import EmptyCart from './EmptyCart';
import ShoppingCartItem from './ShoppingCartItem';

import { ShoppingContext } from '../../state/store';
import { Product } from '../../types';

const ShoppingList = () => {
  // Use context
  const { state } = useContext(ShoppingContext);

  if (state.cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className='mt-8'>
      <div className='flow-root'>
        <ul role='list' className='-my-6 divide-y divide-gray-200'>
          {state.cart.map((product: Product) => (
            <li key={product.gtin} className='flex py-6'>
              <ShoppingCartItem product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
