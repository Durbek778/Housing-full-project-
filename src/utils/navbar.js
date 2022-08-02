import Generic from "../pages/Generic";
import Home from "../pages/Home";
import Properties from "../pages/properties";
import Detailes from "../components/Detailes";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <Home />,
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    element: <Properties />,
    hidden: false,
    private: false,
  },
  {
    id: "2-1",
    title: "Propertie",
    path: "/properties/:id",
    element: <Detailes />,
    hidden: true,
    param: true,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    element: <Generic />,
    hidden: false,
    private: false,
  },
];
