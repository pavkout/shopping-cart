import Header from '../Header';
import Footer from '../Footer';
import HeroImage from '../HeroImage';
import ThemeSwitcher from '../ThemeSwitcher';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className='h-screen relative dark:bg-gray-900'>
    <Header />
    <HeroImage />
    {children}
    <ThemeSwitcher />
    <Footer />
  </div>
);

export default Layout;
