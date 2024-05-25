import React from "react";
import { FooterContact } from "../../constants/content/dashboardContent";

function FooterImages() {
  return (
    <>
     
      <div className="flex w-fit gap-6">
        <RenderIcon src={FooterContact.group} alt={"image"} />
        <RenderIcon src={FooterContact.group4} alt={"image"} />
        <RenderIcon src={FooterContact.group3} alt={"image"} />
        <RenderIcon src={FooterContact.group2} alt={"image"} />
        <RenderIcon src={FooterContact.visa} alt={"image"} />
        <RenderIcon src={FooterContact.netbank} alt={"image"} />
        <RenderIcon src={FooterContact.cashon} alt={"image"} />
        <RenderIcon src={FooterContact.discover} alt={"image"} />
        <RenderIcon src={FooterContact.easyemi} alt={"image"} />
        <RenderIcon src={FooterContact.rupay} alt={"image"} />
      </div>
    </>
  );
}

export default FooterImages;

function RenderIcon({ src, alt }) {
  return (
    <div className="   cursor-pointer flex ">
      <img src={src} alt={alt} className="w-[52px] h-[22px] " />
    </div>
  ); 
}
