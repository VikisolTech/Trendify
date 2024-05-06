import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../auth/Home";
import { AuthRoutes } from "../../constants/routes";
import Register from "../auth/Register";
import Otp from "../auth/Otp";
function AuthNavigation() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={AuthRoutes.otp} element={<Otp />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AuthNavigation;
