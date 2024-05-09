import React from "react";

function AuthButton({ label, onClick }) {
  return (
    <button onClick={onClick} className="bg-secondaryColor rounded-md flex items-center justify-center text-center p-0 my-4 xl:self-center">
      <p className="text-white text-[1rem]">{label}</p>
    </button>

  );
}

export default AuthButton;
