import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useToasts } from 'react-toast-notifications';

import { ShoppingContext } from '../../state/store';
import { resetCart } from '../../state/actions';
import { formatPrice } from '../../utils';

const Footer = () => {
  // Use router object
  const router = useRouter();
  // Use context
  const { state, dispatch } = useContext(ShoppingContext);
  // Use toast system.
  const { addToast } = useToasts();
  // Destructure the needed state values
  const { totalPrice, totalItems } = state;

  const handleEraseCart = () => {
    dispatch(resetCart());
    addToast('The cart has successfully erased.', {
      appearance: 'success',
    });
  };

  return (
    <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
      <div className='flex justify-between text-base font-medium text-gray-900'>
        <p>Subtotal</p>
        <p>{formatPrice('€', totalPrice)}</p>
      </div>
      <p className='mt-0.5 text-sm text-gray-500'>
        Shipping and taxes calculated at checkout.
      </p>
      <div className='mt-6'>
        <button
          onClick={() => router.push('/')}
          className='flex items-center justify-center w-full rounded-md border border-transparent bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700'
        >
          Checkout
        </button>
      </div>
      <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
        <p>
          {totalItems > 0 && (
            <>
              or{' '}
              <button
                type='button'
                className='font-medium text-gray-400 hover:text-gray-500'
                onClick={handleEraseCart}
              >
                Erase Cart
              </button>{' '}
            </>
          )}
          or{' '}
          <button
            type='button'
            className='font-medium text-purple-600 hover:text-purple-500'
            onClick={() => router.push('/')}
          >
            Continue Shopping
            <span aria-hidden='true'> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Footer;
