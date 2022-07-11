import Image from 'next/image';
import { useContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import ItemQuantity from '../ItemQuantity';
import Alert from '../Alert';

import { Product } from '../../types';
import { ShoppingContext } from '../../state/store';
import { removeFromCart } from '../../state/actions';
import { calculateAmountWithQuantity, formatPrice } from '../../utils';

type Props = {
  product: Product;
};

const ProductCartItem = ({ product }: Props) => {
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

  // Use toast system.
  const { addToast } = useToasts();
  // Use context
  const { dispatch } = useContext(ShoppingContext);

  // Create flag for alert status.
  const [open, setOpen] = useState(false);

  // Calculate the amount of money.
  const amount = calculateAmountWithQuantity(recommendedRetailPrice, quantity);

  // This function fires when user click remove button.
  const handleRemoveClick = () => {
    dispatch(removeFromCart(gtin));
    addToast(`${name} has successfully removed from the cart.`, {
      appearance: 'success',
    });
  };

  return (
    <>
      <div className='h-24 w-24 p-4 flex-shrink-0 overflow-hidden rounded-full border border-gray-200'>
        <Image
          src={imageUrl}
          alt='Product Image'
          className='h-full w-full object-cover object-center'
        />
      </div>

      <div className='ml-4 flex flex-1 flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
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
              onClick={() => setOpen(true)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <Alert
        open={open}
        title='Delete Product'
        description='Are you sure you want to delete the product? This action cannot be undone.'
        onReject={() => setOpen(false)}
        onConfirm={handleRemoveClick}
      />
    </>
  );
};

export default ProductCartItem;
