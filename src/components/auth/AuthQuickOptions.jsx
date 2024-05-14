import React from "react";
import { loginContent } from "../../constants/content/LoginContent";

function AuthQuickOptions() {
  return (
    <>
      <p className="text-black text-xl xl:text-center flex justify-center">or continue with</p>
      <div className="flex w-full justify-between xl:justify-evenly">
        <RenderIcon src={loginContent.googleImg} alt={"google"} />
        <RenderIcon src={loginContent.appleImg} alt={"apple"} />
        <RenderIcon src={loginContent.FacebookImg} alt={"facebook"} />
      </div>
    </>
  );
}

export default AuthQuickOptions;

function RenderIcon({ src, alt }) {
  return (
    <div className="bg-white border-1 p-1 w-[33%] xl:w-[20%] px-1 h-14 items-center flex justify-center rounded-lg mx-2">
      <img src={src} alt={alt} className="w-8 h-8 " />
    </div>
  ); 
}