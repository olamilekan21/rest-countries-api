import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Details from "./Details";
import ErrorPage from "./error-page";
import "./index.css";
import { ThemeProvider } from "./utils/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/:id",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider
    enableSystem={true}
    attribute="class"
    storageKey="rest-countries-theme"
    defaultTheme="light"
  >
    <RouterProvider router={router} />
  </ThemeProvider>
);
