import Image from 'next/image';

const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center pt-20 text-gray-900 dark:text-gray-200'>
      <Image
        src='https://i.imgur.com/dCdflKN.png'
        alt='Empty Cart Image'
        width={80}
        height={80}
        className='img-fluid'
      />
      <h3>
        <strong>Your Cart is Empty</strong>
      </h3>
      <h4>Add something to make me happy :)</h4>
    </div>
  );
};

export default EmptyCart;
