import { Link, useRouteLoaderData } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Header = () => {
  const token = useRouteLoaderData('root');
  const brandLink = token ? '/dashboard' : '/';

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <Link className='navbar-brand' to={brandLink}>
            User auth app
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <Navigation />
        </div>
      </nav>
    </header>
  );
};

export default Header;
