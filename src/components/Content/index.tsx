type Props = {
  children: React.ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <div className='container mx-auto min-h-screen flex flex-column justify-between px-4 py-6 overflow-scroll'>
      {children}
    </div>
  );
};

export default Content;
