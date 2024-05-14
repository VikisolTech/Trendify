import React, { useState } from "react";
import { RegisterContent } from "../../constants/content/LoginContent";
import AuthQuickOptions from "../../components/auth/AuthQuickOptions";
import AuthLogo from "../../components/auth/AuthLogo";
import AuthRegisterForm from "../../components/auth/AuthRegisterForm";
import { AuthPrefix, AuthSuffix } from "../../components/auth/AuthPrefixSuffix";
function Register() {


  return (

    <div className="w-full py-8  flex bg-authBgColor h-full justify-center items-center">
      <div className="w-[90%] h-[100%] flex flex-col xl:flex-row items-center xl:items-stretch  bg-white rounded-md px-4 py-4 xl:justify-between">
        <div className="xl:w-[50%] xl:self-center xl:flex flex-col xl:items-center xl:h-full">
          <div className="m-7 xl:self-start xl:mb-18">
            <AuthLogo />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-poppins text-black text-xl  text-center xl:text-2xl">
              {RegisterContent.registerHeader}
            </p>
            <AuthRegisterForm />
            <AuthQuickOptions />
            <div className="flex flex-row mt-3 xl:justify-center justify-center gap-2">
              <AuthPrefix label={RegisterContent.doYouHaveaccount} />
              <AuthSuffix label={RegisterContent.Login} />
            </div>
            <div className="flex flex-row flex-wrap xl:justify-center justify-center gap-2">
              <AuthPrefix label={RegisterContent.continuingIagree} />
              <AuthSuffix label={RegisterContent.TermsUse} />
              <AuthPrefix label={RegisterContent.And} />
              <AuthSuffix label={RegisterContent.privancy} />
            </div>
          </div>
        </div>
        <div className="hidden xl:flex w-[50%] xl:min-h-full">
          <img src={RegisterContent.registerLogo} />
        </div>

      </div>
    </div>

  );

}


export default Register;
