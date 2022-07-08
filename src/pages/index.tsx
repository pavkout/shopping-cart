import { getPage } from './api/products';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const HomePage = ({ products }: any) => {
  return (
    <div className='flex flex-col'>
      <h1>Products</h1>
      <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {products.map((p: Product) => (
          <ProductCard key={p.gtin} product={p} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

export async function getServerSideProps(ctx: any) {
  const products = await getPage(1);

  return { props: { products } };
}
