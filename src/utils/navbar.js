import Generic from "../pages/Generic";
import Home from "../pages/Home";
import Properties from "../pages/properties";

export const navbar = [
  { id: 1, title: "Home", path: "/home", element: <Home /> },
  { id: 1, title: "Properties", path: "/properties", element: <Properties /> },
  { id: 1, title: "Contact", path: "/contact", element: <Generic /> },
];
