import React from "react";
import { Navbar } from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import ErorrPage from "../pages/Error";
import PropertyDetailes from "../components/Detailes/Property Detailes";
import SignIn from "../components/Signin";

export const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<SignIn />} />
        {navbar.map((value) => {
          return (
            <Route key={value.id} path={value.path} element={value.element} />
          );
        })}
      </Route>
      <Route path="/properties:id" element={<PropertyDetailes />} />
      <Route path="*" element={<ErorrPage />} />
    </Routes>
  );
};

export default Root;
