import Link from 'next/link';
import { useContext } from 'react';

import { ShoppingContext } from '../../state/store';

const Nav = () => {
  // Use context
  const { state } = useContext(ShoppingContext);

  const { totalItems } = state;

  return (
    <nav className='flex h-18 py-4 w-full m-auto text-white'>
      <Link href='/'>
        <h1 className='transform duration-300 hover:-translate-y-1 font-display font-thin tracking-wide m-auto pl-4 md:pl-12 text-2xl md:text-5xl'>
          Qogita
        </h1>
      </Link>

      <div className='flex justify-end items-end pr-4 md:pr-24 w-full space-x-6 md:space-x-12 font-display font-thin md:font-light'>
        <Link href='/?cart="true"' as='/cart'>
          <li className='flex transition duration-300 transform hover:-translate-y-1 hover:font-normal'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.3'
                d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
              />
            </svg>
            {totalItems > 0 && (
              <span className='transform duration-300 absolute -right-2 -top-2 h-5 w-5 inline-flex items-center justify-center p-1 text-sm font-semibold text-red-800 bg-gray-100 rounded-full dark:bg-red-700 dark:text-gray-300'>
                {totalItems}
              </span>
            )}
          </li>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
