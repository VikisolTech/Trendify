import React, { useState } from "react";
import { TextField } from "@mui/material";
import { validateInput } from "../../utils/validator";
import { loginContent } from "../../constants/content/LoginContent";
import AuthQuickOptions from "../../components/auth/AuthQuickOptions";
import AuthButton from "../../components/auth/AuthButton";
import AuthLogo from "../../components/auth/AuthLogo";
import { AuthPrefix, AuthSuffix } from "../../components/auth/AuthPrefixSuffix";
function Login() {
  const [inputEmail, setInputEmail] = useState({
    value: "",
    error: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = validateInput(inputEmail);
    if (error) {
      setInputEmail({ ...inputEmail, error: error });
    } else {
      console.log("Entered email or phone number:", inputEmail);
    }
  };

  const handleInputChange = (event) => {
    setInputEmail({ value: event.target.value, error: "" });
  };

  return (
    <div className="w-screen flex bg-authBgColor h-screen  justify-center items-center">
      <div className="w-[90%]  h-[90%] flex flex-col xl:flex-row items-center  xl:items-end bg-white rounded-md px-4 py-4 xl:justify-between">
        <div className="xl:w-[50%] xl:self-center xl:flex flex-col xl:items-center xl:h-full">
          <div className="m-7 xl:self-start xl:mb-18">
          <AuthLogo />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-poppins text-black text-xl my-4 text-center xl:text-2xl">
              {loginContent.loginHeader}
            </p>
            <form className="w-full" onSubmit={handleSubmit} >
            <TextField
              id="exampleInputEmail1"
              label="Email or Phone Number"
              className="self-center xl:flex xl:justify-center xl:max-w-full xl:ml-[60px] my-2"
              fullWidth
              variant="standard"
              name="email"
              value={inputEmail.value}
              onChange={handleInputChange}
              error={!!inputEmail.error}
              helperText={inputEmail.error}

            />
           <AuthButton label={loginContent.loginRequest} routeUrl="/login-otp" />
            </form>
           
            <AuthQuickOptions />
            <div className="flex flex-row my-5 xl:justify-center justify-center gap-2">
              <AuthPrefix label={loginContent.dontHaveAccount} />
              <AuthSuffix label={loginContent.singUp} />
            </div>
          </div>
         
        </div>
        <img className="hidden xl:flex w-[50%] xl:min-h-full" src={loginContent.loginImg} />
      </div>

    </div>
  );
}

export default Login;
