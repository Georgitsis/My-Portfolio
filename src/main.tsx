import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@mantine/core/styles.css";
import "./main.css";
import MainPage from "./Pages/MainPage";

import { MantineProvider, createTheme } from "@mantine/core";

const router = createBrowserRouter([{ path: "/", element: <MainPage /> }]);

const theme = createTheme({ white: "fff" });

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme} forceColorScheme="dark">
    <RouterProvider router={router} />
  </MantineProvider>
);
