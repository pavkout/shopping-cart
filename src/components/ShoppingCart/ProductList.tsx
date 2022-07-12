import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import EmptyCart from './EmptyCart';
import ProductCartItem from './ProductCartItem';
import Alert from '../Alert';

import { useAppContext } from '../../state/store';
import { Product } from '../../types';
import { removeFromCart } from '../../state/actions';

type IDeletedProduct = Pick<Product, 'name' | 'gtin'>;

const ProductList = () => {
  // Use toast system.
  const { addToast } = useToasts();

  // Use context
  const { state, dispatch } = useAppContext();

  // Create flag for alert status.
  const [open, setOpen] = useState(false);

  const [deletedProduct, setDeletedProduct] = useState<IDeletedProduct>();

  const handleRemove = () => {
    if (deletedProduct) {
      setOpen(false);
      dispatch(removeFromCart(deletedProduct.gtin));
      addToast(
        `${deletedProduct.name} has successfully removed from the cart.`,
        {
          appearance: 'success',
        }
      );
    }
  };

  if (state.cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className='mt-8'>
      <div className='flow-root'>
        <ul role='list' className='-my-6 divide-y divide-gray-200'>
          {state.cart.map((product: Product) => (
            <li key={product.gtin} className='flex py-6'>
              <ProductCartItem
                product={product}
                onDelete={() => {
                  setDeletedProduct({ name: product.name, gtin: product.gtin });
                  setOpen(true);
                }}
              />
            </li>
          ))}
        </ul>
        <Alert
          open={open}
          title='Delete Product'
          description='Are you sure you want to delete the product? This action cannot be undone.'
          onReject={() => setOpen(false)}
          onConfirm={handleRemove}
        />
      </div>
    </div>
  );
};

export default ProductList;
