import AuthForm from '../components/AuthForm';

const Signup = () => {
  return (
    <>
      <h1 className='text-center my-5'>Rejestracja</h1>
      <AuthForm register={true} />
    </>
  );
};

export default Signup;
