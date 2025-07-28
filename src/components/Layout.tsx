import React from "react";
import { Outlet } from "react-router";
import { useAppContext } from "../context/AppContext.tsx";
import Navigation from "./Navigation.tsx";

interface Route {
  path: string;
  name: string;
}

interface LayoutProps {
  routes: Route[];
}

const Layout: React.FC<LayoutProps> = ({ routes }) => {
  const { theme } = useAppContext();
  
  const bodyClass = theme.mode === 'dark' ? 'bg-dark' : 'bg-light';

  return (
    <div className={`${bodyClass} min-vh-100`} style={{ transition: 'all 0.3s ease' }}>
      <div className="container-fluid">
        <Navigation routes={routes} />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
