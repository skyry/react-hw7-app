import {createBrowserRouter, RouterProvider, NavLink, Outlet} from "react-router";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import { AppProvider, useAppContext } from "./context/AppContext.tsx";

const routes = [
  { path: "/", element: <Home />, name: "Home" },
  { path: "/about", element: <About />, name: "About" },
  { path: "/contact", element: <Contact />, name: "Contact" },
];

const Navigation = () => {
  const { theme } = useAppContext();
  
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
    <nav className={`navbar mb-4 ${navClass} ${borderColor}`}>
      <div className="container-fluid">
        <a className={`navbar-brand fw-bold ${brandColor}`} href="#">
          🏠 React Home Work 7 App
        </a>
        <div className="d-flex">
          <ul className="navbar-nav d-flex flex-row">
            {routes.map((route) => (
              <li className="nav-item me-2 me-md-3" key={route.path}>
                <NavLink 
                  to={route.path}
                  className={({ isActive }) =>
                    isActive 
                      ? `nav-link fw-bold ${brandColor} px-2`
                      : "nav-link px-2"
                  }
                  style={{ textDecoration: 'none', fontSize: '0.9rem' }}
                  end={route.path === "/"}
                >
                  <span className="d-inline d-md-none">
                    {route.name === "Home" ? "🏠" : route.name === "About" ? "📖" : "📞"}
                  </span>
                  <span className="d-none d-md-inline">
                    {route.name === "Home" ? "🏠 " : route.name === "About" ? "📖 " : "📞 "}{route.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Layout = () => {
  const { theme } = useAppContext();
  
  const bodyClass = theme.mode === 'dark' ? 'bg-dark' : 'bg-light';

  return (
    <div className={`${bodyClass} min-vh-100`} style={{ transition: 'all 0.3s ease' }}>
      <div className="container-fluid">
        <Navigation />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes.map(({ path, element }) => ({ path, element })),
  },
]);

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
