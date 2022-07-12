import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';

import { useAppContext } from '../../state/store';
import { closeCart } from '../../state/actions';

const ShoppingCart = () => {
  // Use context
  const { state, dispatch } = useAppContext();

  const handleClose = () => {
    dispatch(closeCart());
  };

  return (
    <Transition.Root show={state?.isCartOpen || false} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-500 dark:bg-opacity-50' />
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
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl dark:bg-gray-900'>
                    <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                      <Header onClose={handleClose} />
                      <ProductList />
                    </div>

                    <Footer onClose={handleClose} />
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
