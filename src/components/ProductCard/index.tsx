import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useToasts } from 'react-toast-notifications';

import { Product } from '../../types';
import { ShoppingContext } from '../../state/store';
import { addToCart } from '../../state/actions';
import { formatPrice } from '../../utils';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  // Destructure needed props.
  const {
    gtin,
    name,
    imageUrl,
    recommendedRetailPrice,
    recommendedRetailPriceCurrency,
  } = product;

  // Use context
  const { dispatch } = useContext(ShoppingContext);

  // Use toast system.
  const { addToast } = useToasts();

  // This function fires when user click add to cart button.
  const handleAddClick = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    addToast(`${name} has successfully added to cart.`, {
      appearance: 'success',
    });
  };

  return (
    <div className='group relative overflow-hidden rounded-md px-4 pt-4 pb-20 shadow-lg hover:cursor-pointer'>
      <figure className='flex justify-center items-center px-10 '>
        <Image
          src={imageUrl}
          alt='Product Image'
          className='object-contain w-full h-64'
          height={300}
          width={220}
        />
      </figure>
      <div className='flex justify-between'>
        <Link href={`/?gtin=${gtin}`} as={`/product/${gtin}`}>
          <h2 className='text-md text-gray-700 pr-4'>
            <span aria-hidden='true' className='absolute inset-0' />
            {name}
          </h2>
        </Link>
        <p className='text-md font-medium text-gray-900'>
          {formatPrice(recommendedRetailPriceCurrency, recommendedRetailPrice)}
        </p>
      </div>
      <button
        onClick={handleAddClick}
        className='absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-purple-500 pl-4 text-white shadow disabled:opacity-60 hover:opacity-80 text-2xl'
      >
        <ShoppingCartIcon className='h-6 w-6' aria-hidden='true' />
      </button>
    </div>
  );
};

export default ProductCard;
