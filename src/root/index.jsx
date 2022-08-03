import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { navbar } from "../utils/navbar";

// import { Container } from "./styles";

export const Root = () => {
  return (
    <Routes>
      <Route
        path="/profile"
        element={<Navigate to={"/profile/properties"} />}
      />

      <Route element={<Navbar />}>
        {navbar.map(({ path, element, id, param }) => {
          return param && <Route key={id} path={path} element={element} />;
        })}
      </Route>
      <Route element={<Navbar />}>
        {navbar.map(({ path, element, id, hidden }) => {
          return !hidden && <Route key={id} path={path} element={element} />;
        })}
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Route>
      <Route path="*" element={<div>Page Not Found...</div>} />
    </Routes>
  );
};
export default Root;
