import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthNavigation from "./AuthNavigation";
import Home from "../auth/Home";
function Main() {
  return (
    <BrowserRouter>
      <AuthNavigation />
    </BrowserRouter>
  );
}

export default Main;
