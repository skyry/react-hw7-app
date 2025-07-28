import { RouterProvider } from "react-router";
import { AppProvider } from "./context/AppContext.tsx";
import { router } from "./router/index.tsx";

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
