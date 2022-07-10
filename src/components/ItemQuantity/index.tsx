import { useContext } from 'react';
import {
  increaseCartQuantity,
  subtractCartQuantity,
} from '../../state/actions';

import { ShoppingContext } from '../../state/store';

type Props = {
  gtin: string;
  quantity: number;
  onIncrease?(): void;
  onSubtract?(): void;
};

const ItemQuantity = ({ gtin, quantity, onIncrease, onSubtract }: Props) => {
  // Use context
  const { dispatch } = useContext(ShoppingContext);

  const handleAddQuantityToCart = () => {
    if (onIncrease) {
      onIncrease();
    } else {
      dispatch(increaseCartQuantity(gtin));
    }
  };

  const handleSubtractQuantityFromCart = () => {
    if (onSubtract) {
      onSubtract();
    } else {
      dispatch(subtractCartQuantity(gtin));
    }
  };

  return (
    <div className='h-8 flex'>
      <div
        className='h-8 w-8 border-2 rounded-full cursor-pointer flex items-center justify-center'
        onClick={handleSubtractQuantityFromCart}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='gray'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M20 12H4'
          />
        </svg>
      </div>

      <p className='h-8 w-6 flex items-center justify-center font-medium text-purple-600 hover:text-purple-500 select-none'>
        {quantity}
      </p>

      <div
        className='h-8 w-8 border-2 rounded-full cursor-pointer flex items-center justify-center'
        onClick={handleAddQuantityToCart}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='gray'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
      </div>
    </div>
  );
};

export default ItemQuantity;
