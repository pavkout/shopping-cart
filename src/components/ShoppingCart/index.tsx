import { useRouter } from 'next/router';
import { Fragment, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useToasts } from 'react-toast-notifications';

import ShoppingList from './ShoppingList';

import { ShoppingContext } from '../../state/store';
import { formatPrice } from '../../utils';
import { resetCart } from '../../state/actions';

type Props = {
  open: boolean;
};

const ShoppingCart = ({ open }: Props) => {
  // Use router object
  const router = useRouter();
  // Use context
  const { state, dispatch } = useContext(ShoppingContext);
  // Use toast system.
  const { addToast } = useToasts();

  const { cart, totalPrice, totalItems } = state;

  const handleEraseCart = () => {
    dispatch(resetCart());
    addToast('The cart has successfully erased.', {
      appearance: 'success',
    });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => {
          router.push('/');
        }}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-lg font-medium text-gray-900'>
                          {' '}
                          Shopping cart{' '}
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                            onClick={() => router.push('/')}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>

                      <ShoppingList />
                    </div>

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
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ShoppingCart;
