import { Box } from "@mui/material";
import { MyOder } from "../../constants/content/dashboardContent";

function DesktopMyorder({ data }) {

    return <Box className="border border-spacing-2 mt-4 p-2  rounded cursor-pointer">
        {data.isRefundCompleted && <div className="flex">
            <p className="text-green-600 text-sm font-medium font-['Roboto'] mb-3">Refund Completed <span className=" text-[#878787] xt-zinc-500 text-xs font-medium font-['Roboto']"> (Refund ID: 74255454)</span></p>

        </div>}
        {data.isReplacementCompleted && <div className="flex">
            <p className="text-green-600 text-sm font-medium font-['Roboto'] mb-3">Replacement Completed<span className=" text-[#878787] xt-zinc-500 text-xs font-medium font-['Roboto']"> (Refund ID: 74255454)</span></p>

        </div>}
        {data.isReplacementCancelled && <div className="flex">
            <p className="text-[#FF6161] text-sm font-medium font-['Roboto'] mb-3">Replacement Cancelled<span className=" text-[#878787] xt-zinc-500 text-xs font-medium font-['Roboto']"> (Refund ID: 74255454)</span></p>

        </div>}
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <img src={MyOder.Images} width={'122px'} height={'89px'} className="rounded-[10px]" />
                <div>
                    <p className="text-neutral-800 text-sm font-normal font-['Roboto']">{MyOder.Lorem}</p>
                    <p className="text-zinc-500 text-xs font-normal ">{MyOder.Color}</p>
                    {data.isRefundCompleted && <div className="teritiaryButton "> Refund</div>}
                    {(data.isReplacementCompleted || data.isReplacementCancelled) && <div className="teritiaryButton"> Replacement</div>}
                </div>
            </div>
            <p className=" text-neutral-800 text-sm font-normal font-['Roboto']"> {MyOder.amount}</p>
            <div className="w-[160px]">
                <p className="myOrderitem flex items-center gap-1"> <span><img src={(data.isReplacementCancelled || data.isCancelled) ? MyOder.red : MyOder.greenest} /></span>{MyOder.Delivered}</p>
                {data.isDelivered && <p className="myOrderitem">{MyOder.itemdelivered} </p>}
                {data.isRefundCompleted && <p className="myOrderitem"> You returned this order because the power to the product was not
                    consistent.</p>}
                {data.isReplacementCompleted && <p className="myOrderitem"> Your Return request is Cancelled</p>}
                {data.isReplacementCancelled && <p className="myOrderitem"> As per your request, your item has been cancelled</p>}
                {data.isCancelled && <p className=" myOrderitem"> Your item has been cancelled by
                    you</p>}
                <p className=" text-[#C09562] text-sm font-medium font-['Roboto'] flex items-center gap-[5px]"><span><img src={MyOder.star} /></span> {MyOder.Rate}</p>
            </div>
        </div>
        {data.isReplacementCompleted && <p className="myorderCard">We have completed your request for replacement.</p>}
        {data.isReplacementCancelled && <p className="myorderCard">We're sorry. We are unable to process your replace request. Please refer to seller return policy.</p>}

        {data.isRefundCompleted && <div style={{ marginTop: "30px" }}>
            <p className="myorderCard">₹11448.0 will be refunded to your FLIPKARTAXISBANK VISA Credit Card ************8830 on May 11, 2023 •</p>
            <li className="myorderCard">For any questions please contact your bank with reference number 74255454.</li>
            <li className="myorderCard"> For any questions please contact your bank with reference number 74255454.</li>
        </div>}

    </Box>
}
export default DesktopMyorder