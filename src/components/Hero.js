const Hero = (props) => {
  const { title, children } = props;

  return (
    <div className='container pt-4'>
      <div className='p-5 mb-4 bg-light rounded-3'>
        <div className='container pt-5'>
          <h1 className='display-5 fw-bold'>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
