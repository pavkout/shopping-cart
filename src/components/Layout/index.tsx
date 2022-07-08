import Header from '../Header';
import Footer from '../Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className='container mx-auto px-4'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
