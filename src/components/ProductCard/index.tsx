import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/outline';

import { Product } from '../../types';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className='group relative overflow-hidden rounded-md p-4 shadow-lg hover:cursor-pointer'>
      <figure className='px-10'>
        <Image
          src={product.imageUrl}
          alt='Product Image'
          className='object-contain w-full h-64'
          height={300}
          width={220}
        />
      </figure>
      <div className='mt-4 flex justify-between'>
        <Link href={`/?gtin=${product.gtin}`} as={`/product/${product.gtin}`}>
          <h3 className='text-sm text-gray-700'>
            <span aria-hidden='true' className='absolute inset-0' />
            {product.name}
          </h3>
        </Link>
        <p className='text-sm font-medium text-gray-900'>
          {product.recommendedRetailPrice}
          {product.recommendedRetailPriceCurrency}
        </p>
      </div>
      <button className='absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-purple-500 pl-4 text-white shadow disabled:opacity-60 hover:opacity-80 text-2xl'>
        <ShoppingCartIcon className='h-6 w-6' aria-hidden='true' />
      </button>
    </div>
  );
};

export default ProductCard;
