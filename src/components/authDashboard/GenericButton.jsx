import React from "react";


function GenericButton({ label, onClick,height,width,text,image }) {
  return (

  <button onClick={onClick} className={`bg-secondaryColor gap-[10px] flex justify-center ${height} ${width} ${text??'text-white'} items-center rounded-md  `} >
    {image && <img src={image}  />}
    {label}
  </button>

  

  );
}

export default GenericButton;