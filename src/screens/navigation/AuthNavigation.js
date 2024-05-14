import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../../constants/routes";
import Register from "../auth/Authregister";
import Loginotp from "../auth/Authotp";
import Login from "../auth/Login";

function AuthNavigation() {
  return (
    <Routes>
      <Route path={AuthRoutes.loginPage} index element={<Login />} />
      <Route path={AuthRoutes.loginOtp} element={<Loginotp />} />
      <Route path={AuthRoutes.register} element={<Register />} />
    </Routes>
  );
}

export default AuthNavigation;
