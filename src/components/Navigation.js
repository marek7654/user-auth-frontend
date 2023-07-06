import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

const routes = [
  { url: '/', name: 'Home', public: true },
  { url: '/dashboard', name: 'Dashboard', public: false },
  { url: '/login', name: 'Zaloguj się', public: true },
  { url: '/signup', name: 'Załóż konto', public: true },
];

const Navigation = () => {
  const token = useRouteLoaderData('root');

  return (
    <div className='collapse navbar-collapse flex-grow-0' id='navbarNav'>
      <ul className='navbar-nav'>
        {routes
          .filter((item) => !token === item.public)
          .map((route) => (
            <li key={route.name} className='nav-item'>
              <NavLink
                to={route.url}
                className={({ isActive }) =>
                  isActive ? 'nav-link active"' : 'nav-link'
                }
                end
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        {token && (
          <Form action='/logout' method='POST'>
            <input className='nav-link' type='submit' value='Wyloguj' />
          </Form>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
