import { Box, Card } from "@mui/material";
import { AddressContact, MyOder, NavContact } from "../../constants/content/dashboardContent";
import GenericButton from "./GenericButton";

function MobilCustomerOrder() {


    return (
        <>
            <div className="p-6 mt-7">
                <div className="w-full mb-4 flex xl:hidden">

                    <img className="lg:hidden w-auto" src={NavContact.Arrow} />
                    <p className="font-poppins text-black text-2xl  w-full lg:text-start text-center  xl:text-[28px] ">
                        Customer Service
                    </p></div>
                <div className="border border-[#E6E6E6] w-full xl:hidden mb-4"></div>
                <div class="text-zinc-900 text-[20px] font-semibold font-['Urbanist'] leading-snug">Recent issues with this order</div>
                <Card className="mt-3 mb-3">

                    <div className="border p-5">
                        <div className="flex justify-between p-3 items-center">
                            <div>
                                <div class="text-black text-[15px] font-medium font-['Montserrat']">I want to return this product</div>
                                <div><span className="text-lime-600 text-xs font-normal font-['Urbanist'] leading-none">Resolved</span><span className="text-zinc-500 text-xs font-normal font-['Urbanist'] leading-none"> | Apr 10, 2025</span></div>
                            </div>
                            <img src={MyOder.Chevron} width="30px" height="30px" className="rounded-[10px]" />
                        </div>
                    </div>
                    <div className="border border-[#E6E6E6] w-full xl:hidden mb-4"></div>
                    <div className="border p-5">
                        <div className="flex justify-between p-3 items-center">
                            <div>
                                <div class="text-black text-[15px] font-medium font-['Montserrat']">Get my bill or invoice</div>
                                <div><span className="text-lime-600 text-xs font-normal font-['Urbanist'] leading-none">Resolved</span><span className="text-zinc-500 text-xs font-normal font-['Urbanist'] leading-none"> | Apr 10, 2025</span></div>
                            </div>
                            <img src={MyOder.Chevron} width="30px" height="30px" className="rounded-[10px]" />
                        </div>
                    </div>
                    <div className="flex items-center flex-row-reverse mt-4 cursor-pointer mb-3">
                        <img src={MyOder.Chevron} width="20px" height="20px" className="rounded-[10px] mt-[10px]" />
                        <div class="w-[82px] h-4 text-[#C09562] text-[14px] font-medium font-['Urbanist'] leading-[29px]">See All Issues
                        </div>

                    </div>
                </Card>

                <div class="text-zinc-900 text-[20px] font-semibold font-['Urbanist'] leading-snug">Quick Links</div>
                <Card className="mt-3 mb-3">

                    <div className="border p-5">
                        <div className="flex justify-between p-3 items-center">
                            <div className="flex gap-3">
                                <img src={MyOder.Bag} height={'24px'} />
                                <div>
                                    <div class="text-black text-[15px] font-medium font-['Montserrat']">Your Orders</div>
                                    <div class="text-zinc-500 text-xs font-normal font-['Urbanist'] leading-none">Track, return or view an order</div>
                                </div>
                            </div>

                            <img src={MyOder.Chevron} width="30px" height="30px" className="rounded-[10px]" />
                        </div>
                    </div>
                    <div className="border border-[#E6E6E6] w-full xl:hidden mb-4"></div>
                    <div className="border p-5">
                        <div className="flex justify-between p-3 items-center">
                            <div className="flex gap-3">
                                <img src={MyOder.Date} height={'24px'} />
                                <div>
                                    <div class="text-black text-[15px] font-medium font-['Montserrat']">Return & Refunds</div>
                                    <div class="text-zinc-500 text-xs font-normal font-['Urbanist'] leading-none">Return or replace items</div>
                                </div>
                            </div>

                            <img src={MyOder.Chevron} width="30px" height="30px" className="rounded-[10px]" />
                        </div>
                    </div>
                    <div className="border p-5">
                        <div className="flex justify-between p-3 items-center">
                            <div className="flex gap-3">
                                <img src={MyOder.qr} height={'20px'} />
                                <div>
                                    <div class="text-black text-[15px] font-medium font-['Montserrat']">Payment Transactions</div>
                                    <div class="text-zinc-500 text-xs font-normal font-['Urbanist'] leading-none">View transactions and cashback details</div>
                                </div>
                            </div>
                            <img src={MyOder.Chevron} width="30px" height="30px" className="rounded-[10px]" />
                        </div>
                    </div>

                </Card>
                <Card className="mt-3 mb-3 p-2">
                    <div class="text-zinc-900 text-base font-semibold font-['Urbanist'] leading-snug">Selecting the order to get quick customer <br />support and manage it conveniently</div>
                    <div className="border p-5 mt-3">
                        <div className="flex justify-between p-3 items-center">
                            <div className="flex gap-3 items-center">
                                <img src={MyOder.Images} width="122px" height="89px" className="rounded-[10px]" />
                                <div>
                                    <div class="text-black text-[15px] font-medium font-['Montserrat']">Your Orders</div>
                                    <div class="text-zinc-500 text-xs font-normal font-['Urbanist'] leading-none">Track, return or view an order</div>
                                </div>
                            </div>

                            <img src={MyOder.Chevron} width="30px" height="30px" className="rounded-[10px]" />
                        </div>
                    </div>
                    <div className="flex items-center flex-row-reverse mt-4 cursor-pointer mb-3">
                        <img src={MyOder.Chevron} width="20px" height="20px" className="rounded-[10px] mt-[10px]" />
                        <div class="w-[82px] h-4 text-[#C09562] text-[13px] font-medium font-['Urbanist'] leading-[29px]">See All Product
                        </div>

                    </div>
                </Card>
                <div class="text-zinc-900 text-[16px] font-semibold font-['Urbanist'] leading-snug">Need more help?</div>
                <Card className="mt-3 mb-3 p-2">
                    <div class="w-[314px] h-10 px-5 py-3.5 m-5 rounded-[10px] border border-neutral-200 justify-between items-center inline-flex">
                        <div class="grow shrink basis-0 h-[22px] justify-center items-center gap-3 flex">
                            <div class="grow shrink basis-0  text-neutral-400 text-base font-normal font-['Urbanist'] leading-snug">Search</div>
                        </div>
                    </div>
                    <div class="w-[295px] h-0.5 border border-neutral-200 ml-[30px]"></div>
                    <div className="flex items-center flex-row-reverse mt-5  cursor-pointer mb-3">
                        <img src={MyOder.Chevron} width="20px" height="20px" className="rounded-[10px] mt-[10px]" />
                        <div class="h-4 text-[#C09562] text-[13px] w-[130px] font-medium font-['Urbanist'] leading-[29px]">Browse All Help Topics
                        </div>

                    </div>
                </Card>
                <div class="text-zinc-900 text-[16px] font-semibold font-['Urbanist'] leading-snug">Didn’t find what you were looking for?</div>
                <div className="flex justify-center items-center gap-2 mt-5">
                        <GenericButton isSecondaryButton={true} label='Chat with us' height={'h-[50px]'} width={'w-[150px]'} />
                        <GenericButton label='Talk to us' height={'h-[50px]'} width={'w-[150px]'} />
                    </div>
            </div>



        </>
    );
}

export default MobilCustomerOrder;
