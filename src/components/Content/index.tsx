type Props = {
  children: React.ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <div className='min-h-screen flex flex-column justify-between pt-6 pb-6'>
      {children}
    </div>
  );
};

export default Content;
