import { Card, Grid } from "@mui/material";
import GenericButton from "../../components/authDashboard/GenericButton";
import { AddressContact, MyOder } from "../../constants/content/dashboardContent";
import OrderDetailsForm from "../../components/authDashboard/OrderDetailsForm";
import MobilOrderDetails from "../../components/authDashboard/MobilOrderDetails";

export function OrderDetails() {
    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Card className="p-5 w-[100%]">
                  
                    <div className="xl:block hidden">
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-slate-800 text-3xl font-semibold font-['Urbanist']"> Order ID:<span className="text-neutral-800"> 74255454</span> </p>
                            <div className="flex gap-3">
                                <div className='flex'>
                                    <img src={MyOder.document} alt="Search" className='absolute mt-[13px]  ml-1' />
                                    <GenericButton isSecondaryButton={true} label="Invoice" height={'h-[40px]'} width={'w-[100px]'} />
                                </div>
                                <div className="flex flex-row-reverse ">
                                    <GenericButton label='Track order' height={'h-[40px]'} width={'w-[140px]'} />
                                    <img src={AddressContact.LocationImg} alt="Search" className='absolute mt-[12px] mr-2' />

                                </div>
                            </div>


                        </div>
                        <div className="mb-3 mt-4 flex gap-1">
                            <img src={MyOder.truck} />
                            <span className="text-emerald-500 text-base font-semibold font-['Urbanist']"> Estimated delivery: May 16, 2025</span>
                        </div>
                        <div className="border border-[#E6E6E6] w-full flex mb-4 mt-[40px]"></div>

                        <div class=" h-[181.36px] pb-7 justify-center items-start inline-flex relative mt-7">
                            <div class="w-[78%] h-0.5 bg-gray-300 absolute top-[67px] left-[10%] border-[3px]"></div>
                            <div class="w-[268.50px] h-[121px] relative">
                                <div class="w-[26px] h-[26px] left-[91px] top-[55px] absolute">
                                    <div class="w-[26px] h-[26px] left-0 top-0 absolute bg-white rounded-[40px] border-2 border-emerald-500">
                                        <div class="w-3 h-3 left-[7px] top-[7.13px] absolute bg-emerald-500 rounded-full border-2 border-emerald-500"></div>
                                    </div>
                                </div>
                                <div class="w-[268.50px] left-0 top-0 absolute text-center text-emerald-500 text-lg font-medium font-['Inter'] leading-7">
                                    Order Confirmed
                                </div>
                                <div class="w-[196.28px] left-[12px] top-[97px] absolute text-center text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                                    Wed, 11th Jan
                                </div>
                            </div>
                            <div class="w-[268.50px] h-[121px] relative">
                                <div class="w-[22px] h-[22px] left-[123.50px] top-[56px] absolute bg-gray-300 rounded-[11px]"></div>
                                <div class="w-[179.84px] left-[44.56px] top-0 absolute text-center text-gray-300 text-lg font-medium font-['Inter'] leading-7">
                                    Shipped
                                </div>
                                <div class="w-[268.50px] left-0 top-[97px] absolute text-center text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                                    Wed, 11th Jan
                                </div>
                            </div>
                            <div class="w-[268.50px] h-[121px] relative">
                                <div class="w-[22px] h-[22px] left-[112px] top-[56px] absolute bg-gray-300 rounded-[11px]"></div>
                                <div class="w-[268.50px] left-0 top-0 absolute text-center text-gray-300 text-lg font-medium font-['Inter'] leading-7">
                                    Out For Delivery
                                </div>
                                <div class="w-[199.03px] left-[34px] top-[97px] absolute text-center text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                                    Wed, 11th Jan
                                </div>
                            </div>
                            <div class="w-[268.50px] h-[121px] relative">
                                <div class="w-[21.98px] h-[22px] left-[134.50px] top-[55px] absolute bg-gray-300 rounded-[11px]"></div>
                                <div class="w-[262.81px] left-[5.69px] top-0 absolute text-center text-gray-300 text-lg font-medium font-['Inter'] leading-7">
                                    Delivered
                                </div>
                                <div class="w-[268.27px] left-0 top-[97px] absolute text-center text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                                    Expected by Mon, 16th Jan
                                </div>
                            </div>
                        </div>
                        <OrderDetailsForm />
                    </div>
                    <div className="xl:hidden block">
                        <MobilOrderDetails />
                    </div>

                </Card>



            </Grid>
        </Grid>
    )
}
export default OrderDetails;