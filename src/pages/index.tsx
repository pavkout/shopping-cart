import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastProvider } from 'react-toast-notifications';

import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import ShoppingCart from '../components/ShoppingCart';
import Pagination from '../components/Pagination';

import { getPage } from './api/products';
import { Product } from '../types';
import { generateRandom, scrollTop } from '../utils';

type Props = {
  products?: Product[];
};

const HomePage = ({ products = [] }: Props) => {
  const router = useRouter();

  // Create flag to store the current products per page.
  const [productsState, setProductsState] = useState(products);

  // This function fires when user change active page from pagination component.
  const handleFetchPage = async (page: number) => {
    const products = await getPage(page);
    setProductsState(products);
    scrollTop();
  };

  return (
    <ToastProvider autoDismiss={true} placement='top-left'>
      <div className='font-display mt-12 mb-2 text-3xl md:text-4xl font-medium text-center text-gray-700 dark:text-gray-200'>
        <h1> {"Qogita's Collection"} </h1>
      </div>
      <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-6 sm:px-20 lg:px-20 px-6 dark:bg-gray-900'>
        {productsState.map((p: Product) => (
          <ProductCard key={p.gtin} product={p} />
        ))}
      </div>
      <Pagination numberOfPages={100 / 20} onChange={handleFetchPage} />
      <ProductModal
        open={!!router?.query?.gtin}
        ratingStars={generateRandom(1, 5, 1)}
        reviewsNum={generateRandom(1000, 2000, 8)}
        product={
          productsState.filter(
            (p: Product) => p.gtin === router?.query?.gtin
          )[0]
        }
      />
      <ShoppingCart open={!!router?.query?.cart} />
    </ToastProvider>
  );
};

export default HomePage;

export async function getServerSideProps() {
  const products = await getPage(1);

  return { props: { products } };
}
