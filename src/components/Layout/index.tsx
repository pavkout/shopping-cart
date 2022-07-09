import Header from '../Header';
import Footer from '../Footer';
import HeroImage from '../HeroImage';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className='h-screen relative'>
    <Header />
    <HeroImage />
    {children}
    <Footer />
  </div>
);

export default Layout;
