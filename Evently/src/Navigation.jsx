import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore' },
  { label: 'Create', to: '/create' },
  { label: 'Profile', to: '/profile' },
];

export default function Navigation({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <div className="brand">EVENTLY</div>
      <div className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {isLoggedIn ? (
        <button type="button" className="secondary-button small-button logout-button" onClick={onLogout}>
          Logout
        </button>
      ) : (
        <NavLink to="/login" className="primary-button small-button">
          Login
        </NavLink>
      )}
    </nav>
  );
}