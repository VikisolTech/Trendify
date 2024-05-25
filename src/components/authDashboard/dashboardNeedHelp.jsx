import { Card } from "@mui/material";
import { NavContact } from "../../constants/content/dashboardContent";
import GenericButton from "./GenericButton";

export function NeedHelp() {
    return (
        <Card className="mt-2 mb-3 p-6 w-full">
            <div className="flex justify-between">
                <div className="text-black text-[22px] font-normal font-['Urbanist'] leading-loose">Need more help?</div>
                <div className="w-[70%] h-[54px] bg-white border border-solid border-neutral-200 rounded-tl mt-10 mb-8 flex items-center justify-between cursor-pointer">
                    <div className="text-neutral-900 text-base font-['Roboto'] leading-tight pl-3">Search your orders here</div>
                    <div className="flex items-center">
                        <img src={NavContact.searchbar} alt="Search" className='absolute mt-[5px] ml-[30px]' />
                        <GenericButton label="Search" height='h-[52px]' width='w-[165px]' />
                    </div>
                </div>
            </div>
            <div className="text-black text-[22px] font-normal font-['Urbanist'] leading-loose mb-5">All help topics</div>
            <div className="flex gap-3">
    <div className="w-[370px] flex flex-col gap-1">
        <div className="NeedHelp">Recommended Topics</div>
        <div className="NeedHelp">Where's my stuff</div>
        <div className="NeedHelp">Shipping and Delivery</div>
        <div className="NeedHelp">Returns and Refunds</div>
        <div className="NeedHelp">Managing Your Account</div>
        <div className="NeedHelp">Security & Privacy</div>
        <div className="NeedHelp">Payment, Pricing and Promotions</div>
        <div className="NeedHelp">Devices & Digital Solutions</div>
        <div className="NeedHelp">Other topics & Help sites</div>
    </div>
    <div className="flex gap-3">
        <div>
            <div className="px-5 py-4 bg-white rounded border border-neutral-200 flex flex-col justify-center gap-1 mt-2">
                <div className="Headerone">Find a missing package that shows as "Delivered"</div>
                <div className="paragraph">Most packages arrive on time, but sometimes, the tracking may show as "delivered" and you don't have your package.</div>
            </div>
            <div className="px-5 py-4 bg-white rounded border border-neutral-200 flex flex-col justify-center gap-1 mt-2">
                <div className="Headerone">Track your package</div>
                <div className="paragraph">You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking.</div>
            </div>
            <div className="px-5 py-4 bg-white rounded border border-neutral-200 flex flex-col justify-center gap-1 mt-2">
                <div className="Headerone">Find a missing item from your package</div>
                <div className="paragraph">If an item is missing from your package, it may have been shipped separately.</div>
            </div>
            <div className="px-5 py-4 bg-white rounded border border-neutral-200 flex flex-col justify-center gap-1 mt-2">
                <div className="Headerone">Cancel Items or Orders</div>
                <div className="paragraph">You can cancel items or orders that haven't entered the shipping process yet.</div>
            </div>
        </div>
        <div>
            <div className="px-5 py-4 bg-white rounded border border-neutral-200 flex flex-col justify-center gap-1 mt-2">
                <div className="Headerone">Late Deliveries</div>
                <div className="paragraph">Most packages arrive on time. Orders sometimes show up after the estimated delivery date.</div>
            </div>
            <div className="px-5 py-4 bg-white rounded border border-neutral-200 flex flex-col justify-center gap-1 mt-2">
                <div className="Headerone">Check status of a refund</div>
                <div className="paragraph">You can check the status of your refund in <span className="font-bold">Your Orders</span>.</div>
            </div>
            <div className="px-5 py-4 bg-white rounded border border-neutral-200 flex flex-col justify-center gap-1 mt-2">
                <div className="Headerone">Replace an item</div>
                <div className="paragraph">If you received a damaged, defective, or incorrect item, you can request a replacement for eligible items through <span className="font-bold">Your Orders</span>.</div>
            </div>
        </div>
    </div>
</div>

        </Card>
    )
}
export default NeedHelp;
