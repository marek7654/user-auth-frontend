import { useRouteError } from 'react-router-dom';
import Header from '../layouts/Header';
import Hero from '../components/Hero';
import Footer from '../layouts/Footer';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'Niespodziewany błąd!';
  let message = 'Coś poszło nie tak :-(';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = '404';
    message = 'Strona nie istnieje';
  }

  return (
    <>
      <Header />
      <Hero title={title}>
        <p>{message}</p>
      </Hero>
      <Footer />
    </>
  );
};

export default ErrorPage;
