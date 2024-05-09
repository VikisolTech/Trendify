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
      // console.log("Entered email or phone number:", inputEmail);
    }
  };

  const handleInputChange = (event) => {
    setInputEmail({ value: event.target.value, error: "" });
  };

  return (
    <div className="w-screen flex bg-authBgColor h-screen  justify-center items-center">
      <div className="w-[90%] h-[90%] flex flex-col xl:flex-row items-center xl:items-end bg-white rounded-md px-4 py-4 xl:justify-between">
        <div className="xl:w-[50%] xl:self-center">
          <AuthLogo />
          <p className="font-poppins text-black text-xl my-4 text-center xl:text-2xl">
            {loginContent.loginHeader}
          </p>
          <TextField
            id="exampleInputEmail1"
            label="Email or Phone Number"
            className="self-center"
            fullWidth
            variant="standard"
            name="email"
            value={inputEmail.value}
            onChange={handleInputChange}
            error={!!inputEmail.error}
            helperText={inputEmail.error}
          />
          <AuthButton label={loginContent.loginRequest} />
          <AuthQuickOptions />
          <div className="flex flex-row my-5 xl:justify-center">
            <AuthPrefix label={loginContent.dontHaveAccount} />
            <AuthSuffix label={loginContent.singUp} />
          </div>
        </div>
        <img className="hidden xl:flex w-[45%] h-[700px]" src={loginContent.loginImg} />
      </div>
    </div>
  );
}

export default Login;
