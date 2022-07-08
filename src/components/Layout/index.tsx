import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className='container mx-auto px-4'>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </div>
);

export default Layout;
