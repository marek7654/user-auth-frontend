import { NavLink } from 'react-router-dom';

const routes = [
  { url: '', name: 'Home' },
  { url: 'login', name: 'Zaloguj się' },
  { url: 'signup', name: 'Załóż konto' },
];

const Navigation = () => {
  return (
    <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
      <ul className="navbar-nav">
        {routes.map((route) => (
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
        
      </ul>
    </div>
  );
};

export default Navigation;
