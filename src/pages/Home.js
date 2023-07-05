import Button from '../components/Button';
import Column from '../components/Column';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <>
      <Hero title='Witaj!'>
        <p className='col-md-8 fs-4'>
          Przykładowa frontendowa aplikacja stworzona z pomocą ReactJS oraz&nbsp;Bootstrap 5.
        </p>
      </Hero>
      <div className='container'>
        <div className='row align-items-md-stretch'>
          <Column colClasses='col-md-6 pb-4' title='Zaloguj się' darkTheme={true}>
            <p>
              Zaloguj się, aby mieć dostęp do treści znajdujących się na
              serwerze.
            </p>
            <Button
              link='login'
              title='Zaloguj się'
              btnClasses='btn btn-outline-light'
            />
          </Column>
          <Column colClasses='col-md-6 pb-4' title='Załóż konto' darkTheme={false}>
            <p>Nie masz jeszcze konta w serwisie? Przejdź proces rejestracji.</p>
            <Button
              link='signup'
              title='Załóż konto'
              btnClasses='btn btn-outline-secondary'
            />
          </Column>
        </div>
      </div>
    </>
  );
};

export default HomePage;
