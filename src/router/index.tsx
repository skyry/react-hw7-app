import { createBrowserRouter } from "react-router";
import Home from "../components/Home.tsx";
import About from "../components/About.tsx";
import Contact from "../components/Contact.tsx";
import Layout from "../components/Layout.tsx";

export const routes = [
  { path: "/", element: <Home />, name: "Home" },
  { path: "/about", element: <About />, name: "About" },
  { path: "/contact", element: <Contact />, name: "Contact" },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout routes={routes} />,
    children: routes.map(({ path, element }) => ({ path, element })),
  },
]);
