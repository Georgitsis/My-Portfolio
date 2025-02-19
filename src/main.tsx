import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import './index.css'
import "@mantine/core/styles.css";
import MainPage from "./MainPage";

import { MantineProvider } from "@mantine/core";

const router = createBrowserRouter([{ path: "/", element: <MainPage /> }]);

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);
