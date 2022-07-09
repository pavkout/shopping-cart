import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='flex h-18 py-4 w-full m-auto text-white'>
      <Link href='/'>
        <h1 className='transform duration-300 hover:-translate-y-1 font-display font-thin tracking-wide m-auto pl-4 md:pl-12 text-2xl md:text-5xl'>
          Qogita
        </h1>
      </Link>

      <ul className='flex justify-end items-end pr-4 md:pr-24 w-full space-x-6 md:space-x-12 font-display font-thin md:font-light'>
        <Link href='/'>
          <li className='text-sm md:text-lg transition duration-300 transform hover:-translate-y-1 hover:text-purple-500 border-purple-500 hover:border-b-2'>
            Products
          </li>
        </Link>
        <Link href='/cart'>
          <li
            className='flex transition duration-300 transform hover:-translate-y-1 hover:text-purple-500 
                  hover:font-normal border-purple-500 hover:border-b-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
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
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
