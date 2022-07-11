import Link from 'next/link';

const Footer = () => (
  <footer className='bg-gray-200 bg-opacity-40 w-screen pt-8 pb-4 dark:bg-gray-700'>
    <div className='flex flex-col md:flex-row w-5/6 2xl:w-7/12 m-auto justify-between space-y-12 md:space-y-0'>
      <div className='text-center md:text-left m-auto w-full md:w-0'>
        <h1 className='font-display font-medium text-2xl text-gray-900 dark:text-gray-200'>
          Join the Qogita Family
        </h1>
        <p className='font-body py-4 w-72 text-gray-700 dark:text-gray-400'>
          Get notified of new products, special promotions, sales, and more.
        </p>
        <div className='flex mt-6'>
          <input
            className='h-12 p-4 rounded-l font-body bg-gray-100 border-gray-400 hover:border-gray-700 focus:border-gray-700 focus: border-2 focus:outline-none dark:bg-gray-600'
            type='text'
            placeholder='Enter Your Email...'
          ></input>
          <button className='h-12 p-4 w-28 font-body text-sm bg-purple-500 text-white rounded-r transition duration-300 border-purple-900 hover:bg-transparent hover:text-gray-900 hover:border'>
            Subscribe
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-6 sm:px-20 lg:px-20 px-6'>
        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <h1 className='font-display font-medium md:text-lg text-gray-900 dark:text-gray-200'>
              Our offers
            </h1>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700 dark:text-gray-400'>
              View catalog
            </p>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700 dark:text-gray-400'>
              Sell First, Pay Later
            </p>
          </Link>
        </div>

        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <h1 className='font-display font-medium md:text-lg text-gray-900 dark:text-gray-200'>
              Information
            </h1>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700 dark:text-gray-400'>
              Why Qogita
            </p>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700 dark:text-gray-400'>
              Buyers
            </p>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700 dark:text-gray-400'>
              Sellers
            </p>
          </Link>
        </div>

        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <h1 className='font-display font-medium md:text-lg text-gray-900 dark:text-gray-200'>
              Support
            </h1>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700 dark:text-gray-400'>
              Help
            </p>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700 dark:text-gray-400'>
              Contact
            </p>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700 dark:text-gray-400'>
              Developers
            </p>
          </Link>
        </div>

        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <h1 className='font-display font-medium md:text-lg text-gray-900 dark:text-gray-200'>
              Company
            </h1>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700 dark:text-gray-400'>
              About
            </p>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700 dark:text-gray-400'>
              Careers
            </p>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700 dark:text-gray-400'>
              FAQ
            </p>
          </Link>
        </div>

        <div className='flex flex-col space-y-4'>
          <h1 className='font-display font-medium md:text-lg text-gray-900 dark:text-gray-200'>
            Contact
          </h1>
          <p className='font-body text-sm text-gray-700 dark:text-gray-400'>
            pkoutoglou@gmail.com
          </p>
        </div>
      </div>
    </div>
    <span className='flex items-end justify-center w-full h-20 text-gray-900 dark:text-gray-200'>
      © {new Date().getFullYear()} Qogita. All rights reserved.
    </span>
  </footer>
);

export default Footer;
