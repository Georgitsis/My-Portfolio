import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@mantine/core/styles.css";
import "./main.css";
import MainPage from "./Pages/MainPage";
import SmartLittleBoxes from "./Pages/SmartLittleBoxes";
import Meet from "./Pages/Meet";
import Chat from "./Pages/Chat";

import { MantineProvider, createTheme } from "@mantine/core";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/smartlittleboxes", element: <SmartLittleBoxes /> },
  { path: "/meet", element: <Meet /> },
  { path: "/chatapp", element: <Chat /> },
]);

const theme = createTheme({ white: "fff" });

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme} forceColorScheme="dark">
    <RouterProvider router={router} />
  </MantineProvider>
);
