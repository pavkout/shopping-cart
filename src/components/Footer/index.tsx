import Link from 'next/link';

const Footer = () => (
  <footer className='bg-gray-200 bg-opacity-40 w-screen pt-8 pb-4'>
    <div className='flex flex-col md:flex-row w-5/6 2xl:w-7/12 m-auto justify-between space-y-12 md:space-y-0'>
      <div className='text-center md:text-left m-auto w-full md:w-0'>
        <h1 className='font-display font-medium text-2xl text-gray-900'>
          Join the Qogita Family
        </h1>
        <p className='font-body py-4 w-72 text-gray-700'>
          Get notified of new products, special promotions, sales, and more.
        </p>
        <div className='flex mt-6'>
          <input
            className='h-12 p-4 rounded-l font-body bg-gray-100 border-gray-400 hover:border-gray-700 focus:border-gray-700 focus: border-2 focus:outline-none'
            type='text'
            placeholder='Enter Your Email...'
          ></input>
          <button className='h-12 p-4 w-28 font-body text-sm bg-purple-500 text-white rounded-r transition duration-300 border-purple-900 hover:bg-transparent hover:text-gray-900 hover:border'>
            Subscribe
          </button>
        </div>
      </div>

      <div className='flex space-x-6 md:space-x-24'>
        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <h1 className='font-display font-medium md:text-lg text-gray-900'>
              Our offers
            </h1>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700'>
              View catalog
            </p>
          </Link>
          <Link href='/'>
            <p className='font-body text-sm md:text-base text-gray-700'>
              Sell First, Pay Later
            </p>
          </Link>
        </div>

        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <h1 className='font-display font-medium md:text-lg text-gray-900'>
              Information
            </h1>
          </Link>
          <Link href='/'>
            <p>Why Qogita</p>
          </Link>
          <Link href='/'>
            <p>Buyers</p>
          </Link>
          <Link href='/'>
            <p>Sellers</p>
          </Link>
        </div>

        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <h1 className='font-display font-medium md:text-lg text-gray-900'>
              Support
            </h1>
          </Link>
          <Link href='/'>
            <p>Help</p>
          </Link>
          <Link href='/'>
            <p>Contact</p>
          </Link>
          <Link href='/'>
            <p>Developers</p>
          </Link>
        </div>

        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <h1 className='font-display font-medium md:text-lg text-gray-900'>
              Company
            </h1>
          </Link>
          <Link href='/'>
            <p>About</p>
          </Link>
          <Link href='/'>
            <p>Careers</p>
          </Link>
          <Link href='/'>
            <p>FAQ</p>
          </Link>
        </div>

        <div className='flex flex-col space-y-4'>
          <h1 className='font-display font-medium md:text-lg text-gray-900'>
            Contact
          </h1>
          <p className='font-body text-sm text-gray-700'>
            pkoutoglou@gmail.com
          </p>
        </div>
      </div>
    </div>
    <span className='flex items-end justify-center w-full h-20'>
      © {new Date().getFullYear()} Qogita. All rights reserved.
    </span>
  </footer>
);

export default Footer;
