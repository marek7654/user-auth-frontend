import { Form, useActionData } from 'react-router-dom';

const AuthForm = (props) => {
  const data = useActionData();
  const messageClass = data && data.correct ? 'text-success' : 'text-danger';

  return (
    <Form
      method='post'
      className='mw-100 mx-auto mt-5'
      style={{ width: '300px' }}
    >
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}

      {data && data.message && <p className={`text-center ${messageClass}`}>{data.message}</p>}

      <div className='form-floating pb-3'>
        <input
          type='email'
          name='email'
          className='form-control'
          id='floatingInput'
          placeholder='name@example.com'
        />
        <label htmlFor='floatingInput'>Adres e-mail</label>
      </div>
      <div className='form-floating pb-3'>
        <input
          type='password'
          name='password'
          className='form-control'
          id='floatingPassword'
          placeholder='Hasło'
        />
        <label htmlFor='floatingPassword'>Hasło</label>
      </div>

      <button className='w-100 btn btn-lg btn-primary' type='submit'>
        {props.register ? 'Zarejestruj' : 'Zaloguj'}
      </button>
    </Form>
  );
};

export default AuthForm;
