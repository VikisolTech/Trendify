import React, { useState } from "react";
import { RegisterContent } from "../../constants/content/LoginContent";
import AuthQuickOptions from "../../components/auth/AuthQuickOptions";
import AuthLogo from "../../components/auth/AuthLogo";
import AuthRegisterForm from "../../components/auth/AuthRegisterForm";
import { AuthPrefix, AuthSuffix } from "../../components/auth/AuthPrefixSuffix";
import { AuthRoutes } from "../../constants/routes";
function Register() {


  return (

    <div className="w-full   flex bg-authBgColor h-auto justify-center items-center min-h-full">
      <div className="w-[90%] max-[600px]:mb-[30px] relative mt-[14px] mb-[14px] max-[600px]:mt-[30px] xl:h-auto flex flex-col xl:flex-row items-center xl:items-stretch  bg-white rounded-md px-4 py-4 xl:justify-between">
        <div className="xl:w-[50%] xl:self-center xl:flex flex-col xl:items-center xl:h-auto">
          <div className="m-7  xl:relative xl:top-[-20px] l:top-[23px] l:left-[3%] l:absolute xl:self-start xl:mb-18">
            <AuthLogo />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-poppins text-black text-xl  text-center xl:text-[28px]">
              {RegisterContent.registerHeader}
            </p>
            <AuthRegisterForm />
            <AuthQuickOptions />
            <div className="flex flex-row mt-3 xl:justify-center justify-center gap-2">
              <AuthPrefix label={RegisterContent.doYouHaveaccount} />
              <AuthSuffix label={RegisterContent.Login} onPress={() => { window.location.href = AuthRoutes.loginPage }} />
            </div>
            <div className="flex flex-row flex-wrap xl:justify-center justify-center gap-2">
              <AuthPrefix label={RegisterContent.continuingIagree} />
              <AuthSuffix label={RegisterContent.TermsUse} />
              <AuthPrefix label={RegisterContent.And} />
              <AuthSuffix label={RegisterContent.privancy} />
            </div>
          </div>
        </div>
        <div className="hidden xl:flex w-[50%] xl:min-h-full translate-y-4">
          <img src={RegisterContent.registerLogo} />
        </div>

      </div>
    </div>

  );

}


export default Register;
