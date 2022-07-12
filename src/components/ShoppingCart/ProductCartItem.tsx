import Image from 'next/image';

import ItemQuantity from '../ItemQuantity';

import { Product } from '../../types';
import { calculateAmountWithQuantity, formatPrice } from '../../utils';

type Props = {
  product: Product;
  onDelete: () => void;
};

const ProductCartItem = ({ product, onDelete }: Props) => {
  // Destructure the needed product values.
  const {
    gtin,
    imageUrl,
    name,
    recommendedRetailPriceCurrency,
    recommendedRetailPrice,
    quantity,
    categoryName,
  } = product;

  // Calculate the amount of money.
  const amount = calculateAmountWithQuantity(recommendedRetailPrice, quantity);

  return (
    <>
      <div className='h-24 w-24 p-4 flex-shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700'>
        <Image
          src={imageUrl}
          alt='Product Image'
          className='h-full w-full object-cover object-center'
          height={100}
          width={100}
        />
      </div>

      <div className='ml-4 flex flex-1 flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900 dark:text-gray-200'>
            <h3>{name}</h3>
            <p className='ml-4'>
              {formatPrice(recommendedRetailPriceCurrency, amount)}
            </p>
          </div>
          <p className='mt-1 text-sm text-gray-500'>{categoryName}</p>
        </div>
        <div className='flex flex-1 items-center mt-2 justify-between text-sm'>
          <ItemQuantity gtin={gtin} quantity={quantity} />
          <div className='flex'>
            <button
              type='button'
              className='font-medium text-purple-600 hover:text-purple-500'
              onClick={onDelete}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCartItem;
