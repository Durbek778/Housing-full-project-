import React from "react";
import { Navbar } from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import ErorrPage from "../pages/Error";
import SignIn from "../components/Signin";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route element={<Navbar />}>
        {navbar.map((path, Element, id, param) => {
          return param && <Route key={id} path={path} element={Element} />;
        })}
      </Route>
      <Route element={<Navbar />}>
        {navbar.map((path, Element, id, hidden) => {
          return !hidden && <Route key={id} path={path} element={Element} />;
        })}
      </Route>
      <Route path="*" element={<ErorrPage />} />
    </Routes>
  );
};

export default Root;
