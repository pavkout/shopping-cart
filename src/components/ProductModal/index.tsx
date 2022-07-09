import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

import { Product } from '../../types';

type Props = {
  open: boolean;
  product: Product;
};

/**
 * Generate random numbers for raviews.
 */
const generateRandom = (min: number, max: number, step: number) => {
  const randomNum = min + Math.random() * (max - min);
  return Math.round(randomNum / step) * step;
};

const ProductModal = ({ open, product }: Props) => {
  const router = useRouter();

  // Don't display nothing if the open is false or there isn't any product.
  if (!open || !product) return null;

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
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block' />
        </Transition.Child>

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
              enterTo='opacity-100 translate-y-0 md:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 md:scale-100'
              leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
            >
              <Dialog.Panel className='flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl'>
                <div className='w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                  <button
                    type='button'
                    className='absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8'
                    onClick={() => {
                      router.push('/');
                    }}
                  >
                    <span className='sr-only'>Close</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </button>

                  <div className='w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8'>
                    <div className='aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5'>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className='object-center object-cover'
                      />
                    </div>
                    <div className='flex flex-col justify-between h-full sm:col-span-8 lg:col-span-7'>
                      <h2 className='text-2xl font-extrabold text-gray-900 sm:pr-12'>
                        {product.name}
                      </h2>

                      <section
                        aria-labelledby='information-heading'
                        className='mt-2'
                      >
                        <h3 id='information-heading' className='sr-only'>
                          Product information
                        </h3>

                        <p className='text-2xl text-gray-900'>
                          {product.recommendedRetailPrice}
                          {product.recommendedRetailPriceCurrency}
                        </p>

                        <div className='mt-6'>
                          <h4 className='sr-only'>Reviews</h4>
                          <div className='flex items-center'>
                            <div className='flex items-center'>
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={`${
                                    generateRandom(1, 5, 1) > rating
                                      ? 'text-gray-900'
                                      : 'text-gray-200'
                                  } h-5 w-5 flex-shrink-0`}
                                  aria-hidden='true'
                                />
                              ))}
                            </div>
                            <p className='sr-only'>{4} out of 5 stars</p>
                            <a
                              href='#'
                              className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'
                            >
                              {`${generateRandom(1000, 2000, 8)} reviews`}
                            </a>
                          </div>
                        </div>
                      </section>

                      <section
                        aria-labelledby='options-heading'
                        className='mt-10'
                      >
                        <h3 id='options-heading' className='sr-only'>
                          Product options
                        </h3>
                        <p className='mt-1 text-sm text-gray-500'>
                          Brand: {product.brandName}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Category: {product.categoryName}
                        </p>
                        <div className='flex justify-center mt-6 gap-4'>
                          <input
                            type='number'
                            defaultValue='1'
                            min='1'
                            max='99'
                            step='1'
                            required
                            className='w-1/4 text-center leading-normal flex-1 border h-12 border-purple-500 rounded px-3 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
                          />
                          <button
                            type='submit'
                            className='w-3/4 bg-purple-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
                          >
                            Add to Cart
                          </button>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProductModal;
