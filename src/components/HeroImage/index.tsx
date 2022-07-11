const HeroImage = () => {
  return (
    <div
      className='bg-center bg-cover bg-fixed bg-purple-300 bg-no-repeat md:w-full h-3/4'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://cdn.shopify.com/s/files/1/0191/6390/collections/banner_new-arrivals_1200x1600.jpg?v=1586155787')`,
      }}
    />
  );
};

export default HeroImage;
