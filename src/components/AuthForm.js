import { Form } from 'react-router-dom';

const AuthForm = () => {
  return (
    <Form
      method='post'
      className='mw-100 mx-auto mt-5'
      style={{ width: '300px' }}
    >
      <div className='form-floating pb-3'>
        <input
          type='email'
          className='form-control'
          id='floatingInput'
          placeholder='name@example.com'
        />
        <label htmlFor='floatingInput'>Adres e-mail</label>
      </div>
      <div className='form-floating pb-3'>
        <input
          type='password'
          className='form-control'
          id='floatingPassword'
          placeholder='Hasło'
        />
        <label htmlFor='floatingPassword'>Hasło</label>
      </div>

      <button className='w-100 btn btn-lg btn-primary' type='submit'>
        Zaloguj
      </button>
    </Form>
  );
};

export default AuthForm;
