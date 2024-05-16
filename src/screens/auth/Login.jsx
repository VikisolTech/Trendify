import React, { useState } from "react";
import { TextField } from "@mui/material";
import { validateInput } from "../../utils/validator";
import { loginContent } from "../../constants/content/LoginContent";
import AuthQuickOptions from "../../components/auth/AuthQuickOptions";
import AuthButton from "../../components/auth/AuthButton";
import AuthLogo from "../../components/auth/AuthLogo";
import { AuthPrefix, AuthSuffix } from "../../components/auth/AuthPrefixSuffix";
import { AuthRoutes } from "../../constants/routes";
function Login() {
  const [inputEmail, setInputEmail] = useState({
    value: "",
    error: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = validateInput(inputEmail.value);
    if (error) {
      setInputEmail({ ...inputEmail, error: error });
    } else {
      window.location.href= AuthRoutes.loginOtp
      console.log("Entered email or phone number:", inputEmail);
    }
  };

  const handleInputChange = (event) => {
    setInputEmail({ value: event.target.value, error: "" });
  };

  return (
    <div className="w-full h-full  flex bg-authBgColor p-4 xl:pb-24 xl:pt-24  xl:p-24 justify-start items-center min-h-[650px]">
      <div className="w-full h-full flex flex-col   2xl:items-start  items-center min-h-[650px] bg-white rounded-md px-4 py-4 relative box-border">
      <div className="m-10   2xl:self-start self-center   2xl:absolute top-0">
          <AuthLogo />
          </div>
      
         
          <div className="flex flex-grow flex-col 2xl:ml-24  items-center 2xl:justify-center justify-start">
            <p className="font-poppins text-black text-xl my-4 text-center 2xl:text-2xl">
              {loginContent.loginHeader}
            </p>
            <form className="w-full 2xl:w-[92%]" onSubmit={handleSubmit} >
            <TextField
              id="exampleInputEmail1"
              label="Email or Phone Number"
              className="self-center 2xl:flex 2xl:justify-center 2xl:max-w-full 2xl:ml-[60px] my-2"
              fullWidth
              variant="standard"
              name="email"
              value={inputEmail.value}
              onChange={handleInputChange}
              error={!!inputEmail.error}
              helperText={inputEmail.error}

            />
           <AuthButton label={loginContent.loginRequest}  />
            </form>
           
            <AuthQuickOptions />
            <div className="flex flex-row my-5 2xl:justify-center justify-center gap-2">
              <AuthPrefix label={loginContent.dontHaveAccount} />
              <AuthSuffix label={loginContent.singUp}  onPress={()=>{window.location.href= AuthRoutes.register}}/>
            </div>
          </div>
       
        <img className="hidden 2xl:flex  max-w-[600px] absolute bottom-0 right-10 " src={loginContent.loginImg} />
      </div>

    </div>
  );
}

export default Login;
