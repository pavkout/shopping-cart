import { useRouter } from 'next/router';
import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

const Header = () => {
  // Use router object
  const router = useRouter();

  return (
    <div className='flex items-start justify-between'>
      <Dialog.Title className='text-lg font-medium text-gray-900'>
        {' '}
        Shopping cart{' '}
      </Dialog.Title>
      <div className='ml-3 flex h-7 items-center'>
        <button
          type='button'
          className='-m-2 p-2 text-gray-400 hover:text-gray-500'
          onClick={() => router.push('/')}
        >
          <span className='sr-only'>Close panel</span>
          <XIcon className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>
    </div>
  );
};

export default Header;
