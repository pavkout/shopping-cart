import Image from 'next/image';
import { Product } from '../../types';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className='group relative rounded-md border-solid border-2 border-neutral-600 p-4 shadow-sm'>
      <figure className='px-10 pt-10'>
        <Image
          src={product.imageUrl}
          alt='Card Image'
          className='object-contain w-full h-64'
          height={300}
          width={220}
        />
      </figure>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <span aria-hidden='true' className='absolute inset-0' />
            {product.name}
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{product.brandName}</p>
          <p className='mt-1 text-sm text-gray-500'>{product.categoryName}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>
          {product.recommendedRetailPriceCurrency}
          {product.recommendedRetailPrice}
        </p>
      </div>
      <button className=''>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
