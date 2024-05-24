import { Box } from "@mui/material";
import { FooterContact, MyOder } from "../../constants/content/dashboardContent";
import GenericButton from "./GenericButton";

function OrderDetailsForm() {

    return (<>
        <Box className="border border-spacing-2 mt-4 p-2  rounded cursor-pointer hidden xl:block">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img src={MyOder.Images} width={'122px'} height={'89px'} className="rounded-[10px]" />
                    <div>
                        <p className="text-neutral-800 text-2xl font-normal font-['Roboto']">{MyOder.Lorem}</p>
                        <p className="text-zinc-500 text-xs font-normal ">Space Gray | Fiber | Size</p>
                    </div>
                </div>
                <p className=" text-neutral-800 text-sm font-normal font-['Roboto'] pr-2">₹2599.00</p>
            </div>


        </Box>
        <div className="mt-4">
            <p className="text-[#C09562] text-xl font-semibold font-['Urbanist']">Return policy ended on Mar 19</p>
        </div>
        <div className="border border-[#E6E6E6] w-full flex mb-4 mt-[25px]"></div>

        <div className="flex mb-4 justify-between p-4">
            <div>
                <p className="text-black text-[22px] font-medium font-['Urbanist']"> Payment by</p>
                <div className="flex gap-1 mt-1">
                    <p className="text-gray-500 text-base font-normal font-['Inter'] "> Visa **8832</p>
                    <img src={FooterContact.visa} />
                </div>

            </div>
            <div className="pr-3">
                <p className="text-black text-[22px] font-medium font-['Urbanist']">Delivery Address</p>
                <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">08 Gujar Pura , Huzur , Peer Gate , Bhopal 462001</p>
            </div>
        </div>
        <div className="border border-[#E6E6E6] w-full flex mb-4 mt-[25px]"></div>
        <div className="flex mb-4 justify-between p-4">
            <div>
                <p className="text-black text-[22px] font-medium font-['Urbanist']"> Need Help</p>
                <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">Order Issues</p>
                <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">Delivery Info</p>
                <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">Delivery Info</p>


            </div>

            <div className="flex gap-[6rem]">
                <div className="pr-6">
                    <p className="text-black text-[22px] font-medium font-['Urbanist']">Order Summary</p>
                    <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">Sub-total</p>
                    <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">Discount (%)</p>
                    <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">Delivery Charges</p>
                    <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">Delivery Charges</p>

                </div>
                <div className="pr-3 mt-10">

                    <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">₹ 640</p>
                    <p className="text-[#6BA52E] text-base font-normal font-['Inter'] mt-1 ">- ₹ 300</p>
                    <p className="text-gray-500 text-base font-normal font-['Inter'] mt-1 ">₹ 300</p>
                    <p className="text-[#6BA52E] text-base font-normal font-['Inter'] mt-1 ">₹ 200  Free Delivery</p>

                </div>
            </div>
        </div>
        <div className="border border-[#E6E6E6] w-[35%] flex mb-4 mt-[25px] relative left-[60%]"></div>
        <div className="flex flex-row-reverse w-[88%] gap-[7rem]">
            <p className="text-black text-[22px] font-medium font-['Urbanist']">340</p>
            <p className="text-black text-[22px] font-medium font-['Urbanist'] ">Total Amount</p>

        </div>



        <div className="border border-[#E6E6E6] w-full flex mb-4 mt-[25px]"></div>
        <div className="flex justify-center items-center gap-2 mt-5">
            <GenericButton isSecondaryButton={true} label='Return Product' height={'h-[50px]'} width={'w-[150px]'} />
            <GenericButton label='Raise Ticket' height={'h-[50px]'} width={'w-[150px]'} />
        </div>


    </>)

}
export default OrderDetailsForm