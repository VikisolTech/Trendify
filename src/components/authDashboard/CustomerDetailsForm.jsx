import { Box, Card } from "@mui/material";
import React, { useState } from 'react';
import { FooterContact, MyOder } from "../../constants/content/dashboardContent";
import GenericButton from "./GenericButton";
import Dropdown from "./DropDown";

function CustomerDetailsForm() {
    const [issue, setIssue] = useState('');
    const [issueDetail, setIssueDetail] = useState('');
    const [additionalIssue, setAdditionalIssue] = useState('');

    const handleIssueChange = (event) => {
        setIssue(event.target.value);
    };

    const handleIssueDetailChange = (event) => {
        setIssueDetail(event.target.value);
    };

    const handleAdditionalIssueChange = (event) => {
        setAdditionalIssue(event.target.value);
    };

    const issueOptions = [
        { value: 'delivery', label: 'Delivery' },
        { value: 'product', label: 'Product' },
        { value: 'others', label: 'Others' },
    ];

    const issueDetailOptions = [
        { value: 'late', label: 'Late Delivery' },
        { value: 'damaged', label: 'Damaged Product' },
        { value: 'missing', label: 'Missing Items' },
    ];
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleDateOfBirthChange = (event) => {
        setDateOfBirth(event.target.value);
    };


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

        <div className="border border-[#E6E6E6] w-[100%] flex mb-4 mt-[25px] relative "></div>
        <div className="flex justify-between pl-3 pr-28">
            <p className="text-black text-[22px] font-medium font-['Urbanist'] ">Total Amount</p>
            <p className="text-black text-[22px] font-medium font-['Urbanist']">340</p>
        </div>
        <div class="text-zinc-900 text-[20px] font-semibold font-['Urbanist'] leading-snug mt-2" >Tell us more about your issue</div>

        <Card className="p-5 bg-white rounded-[10px] shadow border border-neutral-200 mt-4">
            <div className="flex gap-2">
                <div className="mt-2 w-full">
                    <div class="text-zinc-900 text-sm font-normal font-['Urbanist'] leading-tight">Select an issue</div>

                    <Dropdown
                        value={issue}
                        handleChange={handleIssueChange}
                        error={null}
                        options={issueOptions}
                    />
                </div>
                <div className="mt-2 w-full">
                    <div class="text-zinc-900 text-sm font-normal font-['Urbanist'] leading-tight">Select issue details</div>
                    <Dropdown

                        value={issueDetail}
                        handleChange={handleIssueDetailChange}
                        error={null}
                        options={issueDetailOptions}
                    />
                </div>
            </div>



            <div className="mt-2 w-full">
                <div class="text-zinc-900 text-sm font-normal font-['Urbanist'] leading-tight mb-2">Type your issues related to product, delivery, or others</div>
                <textarea
                    value={additionalIssue}
                    onChange={handleAdditionalIssueChange}
                    className="h-[100px] border border-gray-300 rounded-md p-2 mt-1 w-full"
                    placeholder="Enter your issue here..."
                />
            </div>


        </Card>
        <div class="text-zinc-900 text-base font-semibold font-['Urbanist'] leading-snug mt-2">How would you like to contact us?</div>
        <Card className="p-5 bg-white rounded-[10px] shadow border border-neutral-200 mt-4">
            <div className="flex gap-3">
                <div className="mt-2 w-full items-center">
                    <div class="text-zinc-900 text-sm font-normal font-['Urbanist'] leading-tight">Select Language</div>

                    <Dropdown
                        value={issue}
                        handleChange={handleIssueChange}
                        error={null}
                        options={issueOptions}
                    />
                </div>

                <div className="mt-2 w-full">
                    <div class="text-zinc-900 text-sm font-normal font-['Urbanist'] leading-tight">Type your issues related to product, delivery, or others</div>
                    <input
                        type="date"
                        value={dateOfBirth}
                        onChange={handleDateOfBirthChange}
                        className="border border-gray-300 rounded-md p-2 h-[56px] mt-4 w-full"
                    />
                </div>
            </div>



            <div className="flex justify-center items-center gap-2 mt-5">
                <GenericButton isSecondaryButton={true} label='Chat with us' height={'h-[50px]'} width={'w-[150px]'} />
                <GenericButton label='Talk to us' height={'h-[50px]'} width={'w-[150px]'} />
            </div>

        </Card>





    </>)

}
export default CustomerDetailsForm