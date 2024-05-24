import { Box, Card } from "@mui/material"
import { AddressContact, MyOder, NavContact } from "../../constants/content/dashboardContent"
import GenericButton from "./GenericButton"

export function MobilOrderDetails({ data = {} }) {
    const { title = "No Title", address = "No Address", number = "No Number" } = data;


    const AddressList = [{
        title: "home",
        address: "08 gujar pura, huzur ,peer gate , bhopal , Madhya Paresh - 462001",
        number: '7024393158',
    }];


    const addressDetails = AddressList[0];

    return (
        <>
            <div className="p-6 mt-7">
                <div className="w-full mb-4 flex xl:hidden">

                    <img className="lg:hidden w-auto" src={NavContact.Arrow} />
                    <p className="font-poppins text-black text-xl  w-full lg:text-start text-center  xl:text-[28px] ">
                        {MyOder.myOrders}
                    </p></div>
                <div className="border border-[#E6E6E6] w-full xl:hidden mb-4"></div>
                <Card className="p-5 mt-3">
                    <p className="text-zinc-500 font-medium  font-['Urbanist'] mb-3">Order ID :<span className=" text-[#808080] xt-zinc-500  font-medium font-['Roboto']"> RAJA7024393158PR1050</span></p>
                    <Box className="border border-spacing-2 mt-4 p-3  pt-2 pb-2rounded cursor-pointer xl:hidden">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <img src={MyOder.Images} width="122px" height="89px" className="rounded-[10px]" />
                                <div>
                                    <p className="text-[#1A1A1A] text-[20px] font-medium font-['Roboto'] ">
                                        Regular Fit Black
                                    </p>
                                    <p className="text-[#1A1A1A] text-[20px] font-medium font-['Roboto']">
                                        Size : 42 <span className="pl-1">Qty : 1</span>
                                    </p>
                                    <div className="flex gap-1">
                                        <img src={MyOder.Star} width="20px" height="20px" className="rounded-[10px]" />
                                        <img src={MyOder.Star} width="20px" height="20px" className="rounded-[10px]" />
                                        <img src={MyOder.Star} width="20px" height="20px" className="rounded-[10px]" />
                                        <img src={MyOder.Star} width="20px" height="20px" className="rounded-[10px]" />
                                    </div>

                                    <p className="text-[#1A1A1A] text-[20px] font-medium font-['Roboto'] mb-1">₹ 1,290
                                        <span className="p-1 text-[#FF0000]">-52%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Box>
                    <div className="  p-5 bg-white rounded-[10px] shadow border border-neutral-200  mt-4" >
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <img src={AddressContact.AdressLocationImg} className="w-7 h-7 cursor-pointer mt-[5px]" />
                                <p className="font-semibold">{addressDetails.title}</p>
                            </div>
                        </div>
                        <div className="cursor-pointer pt-0 pb-0 pl-7 pr-[10px] mt-[-10px]">
                            <p className="text-[17px] font-normal text-[#808080]">{addressDetails.address} <br /> {addressDetails.number}</p>
                        </div>

                    </div>
                    <div className="mb-3 mt-4 flex gap-1">
                        <img src={MyOder.truck} />
                        <span className="text-emerald-500 text-base font-semibold font-['Urbanist']"> Estimated delivery: May 16, 2025</span>
                    </div>

                    <div class="w-[351.25px] h-[296px] relative">
                        
                        <div class="w-[63px] h-[0px] left-[9.50px] top-[59px] absolute origin-top-left rotate-90 border-2 border-emerald-500"></div>
                        <div class="w-[63px] h-[0px] left-[9.50px] top-[116px] absolute origin-top-left rotate-90 border-2 border-emerald-500"></div>
                        <div class="w-[63px] h-[0px] left-[9.50px] top-[177px] absolute origin-top-left rotate-90 border-2 border-emerald-500"></div>
                        <div class="left-0 top-[11px] absolute text-center text-zinc-900 text-base font-semibold font-['Urbanist'] leading-tight">Order Status</div>
                        <div class="w-[329px] h-[43px]  top-[46px] absolute">
                            <div class="w-5 h-5 left-0 top-0 absolute bg-white rounded-[40px] border-2 mt-[-2px] border-emerald-500">
                                <div class="w-3 h-3 left-[4px] top-[4.13px] absolute bg-emerald-500 rounded-full"></div>
                            </div>
                            <div class="left-[28px] top-0 absolute flex-col justify-start items-start gap-0.5 inline-flex">
                                <div class="w-[301px] h-[21px] text-zinc-900 text-base font-normal font-['Urbanist'] leading-snug">Order Confirmed </div>
                                <div class="w-[301px] text-zinc-500 text-sm font-normal font-['Urbanist'] leading-tight">Sun , 10th Mar ‘ 2024 - 4:41pm </div>
                            </div>
                        </div>
                        <div class="w-[329px] h-[43px]  top-[105px] absolute">
                            <div class="w-5 h-5 left-0 top-0 absolute bg-white rounded-[40px] border-2  mt-[-2px] border-emerald-500">
                                <div class="w-3 h-3 left-[4px] top-[4.13px] absolute bg-emerald-500 rounded-full"></div>
                            </div>
                            <div class="left-[28px] top-0 absolute flex-col justify-start items-start gap-0.5 inline-flex">
                                <div class="w-[301px] h-[21px] text-zinc-900 text-base font-normal font-['Urbanist'] leading-snug">Shipped</div>
                                <div class="w-[301px] text-zinc-500 text-sm font-normal font-['Urbanist'] leading-tight">Mon , 11th Mar ‘ 2024 - 2:55am</div>
                            </div>
                        </div>
                        <div class="w-[345px] h-[43px]  top-[164px] absolute">
                            <div class="w-5 h-5 left-0 top-0 absolute bg-white rounded-[40px] border-2  mt-[-2px] border-emerald-500">
                                <div class="w-3 h-3 left-[4px] top-[4.13px] absolute bg-emerald-500  rounded-full"></div>
                            </div>
                            <div class="left-[27px] top-0 absolute flex-col justify-start items-start gap-0.5 inline-flex">
                                <div class="w-[301px] h-[21px] text-zinc-900 text-base font-normal font-['Urbanist'] leading-snug">Out For Delivery</div>
                                <div class="w-[301px] text-zinc-500 text-sm font-normal font-['Urbanist'] leading-tight">Tue , 12th Mar ‘ 2024 - 8:59am</div>
                            </div>
                        </div>
                        <div class="w-[350.75px] h-[43px]  top-[223px] absolute">
                            <div class="w-5 h-5 left-0 top-0 absolute bg-white rounded-[40px] border-2  mt-[-2px] border-emerald-500">
                                <div class="w-3 h-3 left-[4px] top-[4.13px] absolute bg-emerald-500 rounded-full"></div>
                            </div>
                            <div class="left-[27.75px] top-0 absolute flex-col justify-start items-start gap-0.5 inline-flex">
                                <div class="w-[301px] h-[21px] text-zinc-900 text-base font-normal font-['Urbanist'] leading-snug">Delivered</div>
                                <div class="w-[301px] text-zinc-500 text-sm font-normal font-['Urbanist'] leading-tight">Tue , 12th Mar ‘ 2024 - 9:15pm</div>
                            </div>
                        </div>
                        <div class="left-[5px] top-[282px] absolute text-[#C09562] text-[15px] font-medium font-['Urbanist']">Return policy ended on Mar 19</div>
                    </div>
                    <p className=" text-zinc-900 text-base font-semibold font-['Urbanist'] mt-4">Order Summary</p>
                    <div className="flex gap-[6rem] border p-3 mt-3">

                        <div className="pr-6">
                            <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">Sub-total</p>
                            <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">Discount (%)</p>
                            <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">Delivery Charges</p>
                            <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">Delivery Charges</p>

                        </div>
                        <div className="pr-3 mt-12">

                            <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">₹ 640</p>
                            <p className="text-[#6BA52E] text-base font-normal font-['Inter'] mt-1 ">- ₹ 300</p>
                            <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">₹ 300</p>
                            <p className="text-[#6BA52E] text-base font-normal font-['Inter'] mt-1 ">₹ 200  Free Delivery</p>

                        </div>
                    </div>
                    <div className="border border-[#E6E6E6] w-[100%] flex mb-4 mt-[25px] relative left-[-2%]"></div>
                    <div className="flex justify-between w-[85%]">
                        <p className="text-black text-[22px] font-medium font-['Urbanist'] ">Total Amount</p>
                        <p className="text-black text-[22px] font-medium font-['Urbanist']">340</p>


                    </div>

                    <div className="flex justify-center items-center gap-2 mt-5">
                        <GenericButton isSecondaryButton={true} label='Return Product' height={'h-[50px]'} width={'w-[150px]'} />
                        <GenericButton label='Raise Ticket' height={'h-[50px]'} width={'w-[150px]'} />
                    </div>

                </Card>

            </div>

        </>


    )
}
export default MobilOrderDetails