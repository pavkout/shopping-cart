import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Alert from '../Alert';

import { useAppContext } from '../../state/store';
import { resetCart } from '../../state/actions';
import { formatPrice } from '../../utils';

type Props = {
  onClose: () => void;
};

const Footer = ({ onClose }: Props) => {
  // Create flag for alert status.
  const [open, setOpen] = useState(false);

  // Use context
  const { state, dispatch } = useAppContext();

  // Use toast system.
  const { addToast } = useToasts();

  // Destructure the needed state values
  const { totalPrice, totalItems } = state;

  const handleEraseCart = () => {
    dispatch(resetCart());
    setOpen(false);
    addToast('The cart has successfully erased.', {
      appearance: 'success',
    });
  };

  return (
    <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
      <div className='flex justify-between text-base font-medium text-gray-900 dark:text-gray-200'>
        <p>Subtotal</p>
        <p>{formatPrice('€', totalPrice)}</p>
      </div>
      <p className='mt-0.5 text-sm text-gray-500'>
        Shipping and taxes calculated at checkout.
      </p>
      <div className='mt-6'>
        <button
          disabled={totalItems === 0}
          aria-label='Checkout'
          onClick={onClose}
          className={`${
            totalItems === 0 ? 'bg-gray-400 cursor-not-allowed' : ''
          } flex items-center justify-center w-full rounded-md border border-transparent bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700'`}
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
                onClick={() => setOpen(true)}
              >
                Erase Cart
              </button>{' '}
            </>
          )}
          or{' '}
          <button
            type='button'
            className='font-medium text-purple-600 hover:text-purple-500'
            onClick={onClose}
          >
            Continue Shopping
            <span aria-hidden='true'> &rarr;</span>
          </button>
        </p>
      </div>
      <Alert
        open={open}
        title='Erase Cart'
        description='Are you sure you want to erase your cart? All of your data will be permanently removed. This action cannot be undone.'
        onReject={() => setOpen(false)}
        onConfirm={handleEraseCart}
      />
    </div>
  );
};

export default Footer;
