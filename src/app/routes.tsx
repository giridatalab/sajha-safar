import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Packages } from "./pages/Packages";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "packages", Component: Packages },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
    ],
  },
]);
