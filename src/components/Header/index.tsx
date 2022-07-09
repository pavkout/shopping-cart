import Banner from '../Banner';
import Nav from '../Nav';

function Header() {
  return (
    <div className='absolute w-full z-10'>
      <Banner />
      <Nav />
    </div>
  );
}

export default Header;
