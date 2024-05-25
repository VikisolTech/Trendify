import { Box, Card } from "@mui/material";
import { AddressContact, MyOder, NavContact } from "../../constants/content/dashboardContent";
import GenericButton from "./GenericButton";
import NeedHelp from "./dashboardNeedHelp";

function DashboardCustomerSupport() {


    return (
        <>
            <Card className="p-6">
                <div class="text-black text-[30px] font-semibold font-['Urbanist']">Welcome to Trendify Customer Service, RAJAT</div>
                <div class=" text-justify text-black text-lg font-normal font-['Urbanist'] leading-[25px] mt-3">The Trendify Customer Service page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Trendify Customer Service also lists out more information that you may need regarding payment, shopping, and more. The page has various filters listed out on the below down so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the Trendify Customer Service number or even access Flipkart Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online. This information is updated on 17-May-24 </div>
                <div class="text-black text-[22px] font-normal font-['Urbanist'] mt-4">What would you like help with today? You can quickly take care of most things here, or connect with us when needed.</div>


                <Card className="mt-5 mb-3 p-4 cursor-pointer" onClick={()=>{window.location.href='/customer-support/:id'}}>
                    <div class="text-neutral-800 text-[22px] font-normal font-['Roboto'] leading-relaxed mb-3">Which item are you facing an issue with?</div>

                    <div className="border border-[#E6E6E6] w-full xl:hidden mb-4"></div>
                    <div className="border-b p-5">
                        <div className="flex gap-3 items-center">
                            <img src={MyOder.Images} width="122px" height="89px" className="rounded-[10px]" />
                            <div>
                                <div class="text-black text-[15px] font-medium font-['Montserrat']">APC BX600C-IN BACK - UPS 600 UPS</div>
                                <div className="flex gap-1">
                                    <img src={MyOder.greenest} />
                                    <div class="text-zinc-500 text-xs font-normal font-['Urbanist'] leading-none">Delivered on May 07
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-row-reverse mt-4 cursor-pointer mb-3">
                        <img src={MyOder.Chevron} width="20px" height="20px" className="rounded-[10px] mt-[10px]" />
                        <div class="w-[82px] h-4 text-[#C09562] text-[13px] font-medium font-['Urbanist'] leading-[29px]">See All Product
                        </div>

                    </div>
                </Card>

                <div className="flex gap-3">
                    <Card className="mt-5 mb-3 p-4 w-full cursor-pointer"   onClick={()=>{window.location.href='/customer-support/:id'}}>
                        <div class="text-neutral-800 text-[22px] font-normal font-['Roboto'] leading-relaxed">Your issues</div>

                        <div className="border border-[#E6E6E6] w-full xl:hidden mb-4"></div>
                        <div className="border-b p-5">
                            <div className="flex gap-3 items-center">
                                <img src={MyOder.Images} width="122px" height="89px" className="rounded-[10px]" />
                                <div>
                                    <div class="text-black text-[15px] font-medium font-['Montserrat']">APC BX600C-IN BACK - UPS 600 UPS</div>
                                    <div className="flex gap-1">
                                        <p className="text-green-600 text-sm font-medium font-['Roboto'] mb-3">Resolved <span className=" text-[#878787] xt-zinc-500 text-xs font-medium font-['Roboto']"> | Apr 10, 2024</span></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <div className="border-b p-5">
                            <div className="flex gap-3 items-center">
                                <img src={MyOder.Images} width="122px" height="89px" className="rounded-[10px]" />
                                <div>
                                    <div class="text-black text-[15px] font-medium font-['Montserrat']">APC BX600C-IN BACK - UPS 600 UPS</div>
                                    <div className="flex gap-1">
                                        <p className="text-green-600 text-sm font-medium font-['Roboto'] mb-3">Resolved <span className=" text-[#878787] xt-zinc-500 text-xs font-medium font-['Roboto']"> | Apr 10, 2024</span></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="flex items-center flex-row-reverse mt-4 cursor-pointer mb-3">
                            <img src={MyOder.Chevron} width="20px" height="20px" className="rounded-[10px] mt-[10px]" />
                            <div class="w-[82px] h-4 text-[#C09562] text-[13px] font-medium font-['Urbanist'] leading-[29px]">See All Product
                            </div>

                        </div>
                        
                    </Card>


                    <Card className="mt-5 mb-3 p-4 w-full">
                        <div class="text-neutral-800 text-[22px] font-normal font-['Roboto'] leading-relaxed">What issue are you facing?</div>
                        <div className="border border-[#E6E6E6] w-full xl:hidden mb-4"></div>
                        <div className="border-b p-5">
                            <div className="flex gap-3 items-center justify-between">
                                <div>
                                    <div class="text-black text-[15px] font-medium font-['Montserrat']">I want to manage my order</div>
                                    <div class="w-[158.15px] h-[16.80px] text-zinc-500 text-xs font-normal font-['Roboto'] leading-none">View,cancel or return an order</div>
                                </div>
                                <img src={MyOder.Chevron} width="30px" height="30px" className="rounded-[10px]" />
                            </div>
                        </div>
                        <div className="border border-[#E6E6E6] w-full xl:hidden mb-4"></div>
                        <div className="border-b p-5">
                            <div className="flex gap-3 items-center justify-between">
                                <div>
                                <div class="text-neutral-800 text-base font-normal font-['Roboto'] leading-tight">I want help with returns & refunds</div>
                                <div class="w-[136.61px] h-[16.80px] text-zinc-500 text-xs font-normal font-['Roboto'] leading-none">Manage and track returns</div>
                                </div>
                                <img src={MyOder.Chevron} width="30px" height="30px" className="rounded-[10px]" />
                            </div>
                        </div>
                        <div className="border border-[#E6E6E6] w-full xl:hidden mb-4"></div>
                        <div className="border-b p-5">
                            <div className="flex gap-3 items-center justify-between">
                                <div>
                                <div class="text-neutral-800 text-base font-normal font-['Roboto'] leading-tight">I want help with other issues</div>
                                <div class="w-[136.61px] h-[16.80px] text-zinc-500 text-xs font-normal font-['Roboto'] leading-none">Offers,payment, & all other issues</div>
                                </div>
                                <img src={MyOder.Chevron} width="30px" height="30px" className="rounded-[10px]" />
                            </div>
                        </div>
                        <div className="border border-[#E6E6E6] w-full xl:hidden mb-4"></div>
                        <div className="flex items-center flex-row-reverse mt-4 cursor-pointer mb-3">
                            <img src={MyOder.Chevron} width="20px" height="20px" className="rounded-[10px] mt-[10px]" />
                            <div class="w-[82px] h-4 text-[#C09562] text-[13px] font-medium font-['Urbanist'] leading-[29px]">See All FAQs
                            </div>

                        </div>
                    </Card>
                </div>

                <NeedHelp />

                <div class="text-zinc-900 text-[22px] font-semibold font-['Urbanist'] leading-[30.80px]">Didn’t find what you were looking for?</div>
                <div className="flex justify-center items-center gap-2 mt-5">
                    <GenericButton isSecondaryButton={true} label='Chat with us' height={'h-[50px]'} width={'w-[150px]'} />
                    <GenericButton label='Talk to us' height={'h-[50px]'} width={'w-[150px]'} />
                </div>

            </Card>

        </>
    );
}

export default DashboardCustomerSupport;
