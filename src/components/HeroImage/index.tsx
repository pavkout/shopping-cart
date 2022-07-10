const HeroImage = () => {
  return (
    <div
      className='bg-center bg-cover bg-fixed bg-purple-300 bg-no-repeat md:w-full h-3/4'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://pngimage.net/wp-content/uploads/2018/06/png-new-collection-1.png')`,
      }}
    />
  );
};

export default HeroImage;
