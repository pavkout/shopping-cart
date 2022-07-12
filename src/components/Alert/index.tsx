/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type Props = {
  open: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onReject: () => void;
};

const Alert = ({ open, title, description, onConfirm, onReject }: Props) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={onReject}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100'>
                <h2 className='flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    className='w-6 h-6 fill-current shrink-0 text-purple-400'
                  >
                    <path d='M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z'></path>
                    <rect width='32' height='136' x='240' y='112'></rect>
                    <rect width='32' height='32' x='240' y='280'></rect>
                  </svg>
                  {title}
                </h2>
                <p className='flex-1 dark:text-gray-400'>{description}</p>

                <div className='flex flex-col justify-end gap-3 mt-6 sm:flex-row'>
                  <button
                    onClick={onReject}
                    ref={cancelButtonRef}
                    className='px-6 py-2 rounded-sm'
                  >
                    No
                  </button>
                  <button
                    onClick={onConfirm}
                    className='px-6 py-2 rounded-sm shadow-sm text-white bg-purple-400 dark:text-gray-900'
                  >
                    Yes
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Alert;
