import React from "react";
import { mainContent } from "../../constants/content/mainContent";

function AuthLogo() {
  return (
    <div className="flex flex-col items-center xl:flex-row">
      <img className="w-20 h-20" src={mainContent.appLogo} />

      <p className="text-xl mt-2 font-poppins font-medium">
        {mainContent.appName}
      </p>
    </div>
  );
}

export default AuthLogo;
