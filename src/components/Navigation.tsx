import React, { useState } from "react";
import { NavLink } from "react-router";
import { useAppContext } from "../context/AppContext.tsx";

interface Route {
  path: string;
  name: string;
}

interface NavigationProps {
  routes: Route[];
}

const Navigation: React.FC<NavigationProps> = ({ routes }) => {
  const { theme } = useAppContext();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  const navClass = theme.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light';
  const borderColor = `border-bottom border-3 border-${theme.primaryColor === 'orange' ? 'warning' : 
    theme.primaryColor === 'green' ? 'success' : 
    theme.primaryColor === 'red' ? 'danger' : 
    theme.primaryColor === 'softblue' ? 'info' : 'primary'}`;

  const brandColor = theme.primaryColor === 'orange' ? 'text-warning' : 
    theme.primaryColor === 'green' ? 'text-success' : 
    theme.primaryColor === 'red' ? 'text-danger' : 
    theme.primaryColor === 'softblue' ? 'text-info' : 'text-primary';

  return (
    <nav className={`navbar navbar-expand-lg mb-4 ${navClass} ${borderColor}`}>
      <div className="container-fluid">
        <a className={`navbar-brand fw-bold ${brandColor}`} href="#">
          🏠 React Home Work 7 App
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {routes.map((route) => (
              <li className="nav-item" key={route.path}>
                <NavLink 
                  to={route.path}
                  className={({ isActive }) =>
                    isActive 
                      ? `nav-link fw-bold ${brandColor}`
                      : "nav-link"
                  }
                  style={{ textDecoration: 'none' }}
                  end={route.path === "/"}
                  onClick={() => setIsNavCollapsed(true)}
                >
                  {route.name === "Home" ? "🏠 " : route.name === "About" ? "📖 " : "📞 "}{route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
