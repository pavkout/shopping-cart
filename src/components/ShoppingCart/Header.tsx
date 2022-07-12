import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

type Props = {
  onClose: () => void;
};

const Header = ({ onClose }: Props) => {
  return (
    <div className='flex items-start justify-between'>
      <Dialog.Title className='text-lg font-medium text-gray-900 dark:text-gray-200'>
        {' '}
        Shopping cart{' '}
      </Dialog.Title>
      <div className='ml-3 flex h-7 items-center'>
        <button
          type='button'
          className='-m-2 p-2 text-gray-400 hover:text-gray-500'
          onClick={onClose}
        >
          <span className='sr-only'>Close panel</span>
          <XIcon className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>
    </div>
  );
};

export default Header;
