import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../../constants/routes";
import Register from "../auth/Authregister";
import Loginotp from "../auth/Authotp";
import Login from "../auth/Login";
import  AddressComponent from "../Dashboard/Address";
import DashboardLayout from "../../components/layout/DashboardLayout";
import AddNewAddress from "../Dashboard/AddNewAddress";
import Footer from "../Dashboard/Footer";
import Personal from "../Dashboard/PersonalInfo";
import MyOrders from "../Dashboard/MyOrders";
import ManageCards from "../Dashboard/ManageCards";
import CustomerSupport from "../Dashboard/CustomerSupport";


function AuthNavigation() {
  return (
    <Routes>
      <Route path={AuthRoutes.loginPage} index element={<Login />} />
      <Route path={AuthRoutes.loginOtp} element={<Loginotp />} />
      <Route path={AuthRoutes.register} element={<Register />} />
      <Route path={AuthRoutes.personalInformation} element= {<DashboardLayout selectedIndex={0}> <Personal/> </DashboardLayout>}/>
      <Route path={AuthRoutes.myOrder} element= {<DashboardLayout selectedIndex={1}> <MyOrders/> </DashboardLayout>}/>
      <Route path={AuthRoutes.manageAddress} element= {<DashboardLayout selectedIndex={2}> <AddressComponent/> </DashboardLayout>}/>
      <Route path={AuthRoutes.manageCards} element= {<DashboardLayout selectedIndex={3}> <ManageCards/> </DashboardLayout>}/>
      <Route path={AuthRoutes.customerSupport} element= {<DashboardLayout selectedIndex={4}> <CustomerSupport/> </DashboardLayout>}/>
      {/* <Route path={AuthRoutes.logout} element= {<DashboardLayout selectedIndex={5}> <AddressComponent/> </DashboardLayout>}/> */}
      <Route path={AuthRoutes.AddNewAddress} element={<AddNewAddress />} />
      <Route path={AuthRoutes.Footer} element={<Footer />} />

    </Routes>


  );
}

export default AuthNavigation;
