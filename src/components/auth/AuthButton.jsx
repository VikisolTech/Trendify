import React from "react";

function AuthButton({ label, onClick }) {
  return (
<div className="xl:flex xl:justify-center flex justify-center">
  <button onClick={onClick} className="bg-secondaryColor rounded-md text-white text-[1rem] py-2 px-4 my-4">
    {label}
  </button>
</div>
  

  );
}

export default AuthButton;
