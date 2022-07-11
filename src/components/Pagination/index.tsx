import { useState } from 'react';

type Props = {
  numberOfPages: number;
  onChange: (page: number) => void;
};

const Pagination = ({ numberOfPages = 5, onChange }: Props) => {
  // Create a flag to store the active page.
  const [active, setActive] = useState(1);

  /**
   * This function fires when user click previous button.
   */
  const handlePreviousClick = () => {
    // Check first if the active flag is more than 1
    if (active > 1) {
      setActive(active - 1);
      onChange(active - 1);
    }
  };

  /**
   * This function fires when user click next button.
   */
  const handleNextClick = () => {
    // Check first if the active flag is less than numberOfPages - 1.
    if (active < numberOfPages) {
      setActive(active + 1);
      onChange(active + 1);
    }
  };

  /**
   * This function fires when user click specific page.
   * @param page The selected page.
   */
  const handlePageClick = (page: number) => {
    setActive(page);
    onChange(page);
  };

  return (
    <>
      <div className='flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4 dark:bg-gray-900'>
        <div className='lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200'>
          <div
            role='button'
            className={`${
              active > 1
                ? 'text-gray-600 hover:text-indigo-700 cursor-pointer'
                : 'text-gray-300 cursor-default'
            } flex items-center pt-3`}
            onClick={handlePreviousClick}
          >
            <svg
              width={14}
              height={8}
              viewBox='0 0 14 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.1665 4H12.8332'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1.1665 4L4.49984 7.33333'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1.1665 4.00002L4.49984 0.666687'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <p className='text-sm ml-3 font-medium leading-none '>Previous</p>
          </div>
          <div className='sm:flex hidden'>
            {Array.from(Array(numberOfPages), (val, index) => index + 1).map(
              (i: number) => {
                const defaultClasses =
                  'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2';
                const activeClasses =
                  'text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2';

                return (
                  <p
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={active === i ? activeClasses : defaultClasses}
                  >
                    {i}
                  </p>
                );
              }
            )}
          </div>
          <div
            role='button'
            className={`${
              active < numberOfPages
                ? 'text-gray-600 hover:text-indigo-700 cursor-pointer'
                : 'text-gray-300 cursor-default'
            } flex items-center pt-3`}
            onClick={handleNextClick}
          >
            <p className='text-sm font-medium leading-none mr-3'>Next</p>
            <svg
              width={14}
              height={8}
              viewBox='0 0 14 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.1665 4H12.8332'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M9.5 7.33333L12.8333 4'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M9.5 0.666687L12.8333 4.00002'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
