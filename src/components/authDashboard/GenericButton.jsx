import React from "react";


function GenericButton({ label, onClick, height, width, text, image, isSecondaryButton }) {
  return (

    <button onClick={onClick} className={`${isSecondaryButton ? "bg-white border border-[#101616]" : "bg-secondaryColor"} gap-[10px] flex justify-center ${height} ${width} ${text ?? (isSecondaryButton ? "text-[#101616]" : 'text-white')} items-center rounded-md  `} >
      {image && <img src={image} />}
      {label}
    </button>



  );
}

export default GenericButton;