import { GetServerSideProps } from 'next/types';
import { ToastProvider } from 'react-toast-notifications';
import ProductModal from '../../components/ProductModal';

import { Product } from '../../types';
import { generateRandom } from '../../utils';
import { getProduct } from '../api/products/[gtin]';

type Props = {
  product: Product;
};

const ProductPage = ({ product }: Props) => {
  console.log(product);
  return (
    <ToastProvider autoDismiss={true} placement='top-left'>
      <ProductModal
        open={true}
        product={product}
        ratingStars={generateRandom(1, 5, 1)}
        reviewsNum={generateRandom(1000, 2000, 8)}
      />
    </ToastProvider>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const gtin = context?.query?.gtin;

  const product = await getProduct(gtin as string);

  return { props: { product } };
};
