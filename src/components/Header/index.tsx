import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex justify-between'>
      <strong>Qogita</strong>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link href='/'>
              <a className='underline'>Products</a>
            </Link>
          </li>
          <li>
            <Link href='/cart'>
              <a className='underline'>Your Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
