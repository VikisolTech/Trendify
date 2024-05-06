import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../../constants/routes";
import Register from "../auth/Register";
import Loginotp from "../auth/Loginotp";
import Login from "../auth/Login";

function AuthNavigation() {
  return (
    <Routes>
      <Route index element={<Login/>} />
      <Route path={AuthRoutes.Loginotp} element={<Loginotp />} />
      <Route path={AuthRoutes.Register} element={<Register />} />
    </Routes>
  );
}

export default AuthNavigation;
