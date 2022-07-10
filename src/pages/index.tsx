import { useRouter } from 'next/router';

import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import ShoppingCart from '../components/ShoppingCart';

import { getPage } from './api/products';
import { Product } from '../types';
import { generateRandom } from '../utils';

type Props = {
  products: Product[];
};

const HomePage = ({ products }: Props) => {
  const router = useRouter();

  return (
    <>
      <div className='font-display mt-12 mb-2 text-3xl md:text-4xl font-medium text-center text-gray-700'>
        <h1> Qogita's Collection </h1>
      </div>
      <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-6 px-20'>
        {products.map((p: Product) => (
          <ProductCard key={p.gtin} product={p} />
        ))}
      </div>
      <ProductModal
        open={!!router.query.gtin}
        ratingStars={generateRandom(1, 5, 1)}
        reviewsNum={generateRandom(1000, 2000, 8)}
        product={
          products.filter((p: Product) => p.gtin === router.query.gtin)[0]
        }
      />
      <ShoppingCart open={!!router.query.cart} />
    </>
  );
};

export default HomePage;

export async function getServerSideProps() {
  const products = await getPage(1);
  console.log(products);
  return { props: { products } };
}
