import { Box } from "@mui/material";
import { MyOder } from "../../constants/content/dashboardContent";

function MobilMyorder({ data }) {
    const { isDelivered, isRefundCompleted, isReplacementCompleted, isReplacementCancelled } = data;
    
    return (
        <Box  onClick={()=>{window.location.href='/my-order/:id'}}
         className="border border-spacing-2 mt-4 p-2 rounded cursor-pointer xl:hidden">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <img src={MyOder.Images} width="122px" height="89px" className="rounded-[10px]" />
                    <div>
                        {isDelivered && (
                            <div className="flex">
                                <p className="text-[#1A1A1A] text-[20px] font-medium font-['Roboto'] mb-2">
                                    Delivered on Tue May 07
                                </p>
                            </div>
                        )}
                        {isRefundCompleted && (
                            <div className="flex">
                                <p className="text-[#1A1A1A] text-[20px] font-medium font-['Roboto'] mb-2">
                                    Refund Completed
                                </p>
                            </div>
                        )}
                        {isReplacementCompleted && (
                            <div className="flex">
                                <p className="text-[#1A1A1A] text-[20px] font-medium font-['Roboto'] mb-2">
                                    Replacement Completed
                                </p>
                            </div>
                        )}
                        {isReplacementCancelled && (
                            <div className="flex">
                                <p className="text-[#1A1A1A] text-[20px] font-medium font-['Roboto'] mb-2">
                                    Replacement Cancelled
                                </p>
                            </div>
                        )}
                        <p className="text-neutral-800 text-sm font-normal font-['Roboto'] mb-2">
                            {MyOder.Lorem}
                        </p>
                        <p className="text-zinc-500 text-[16px] font-normal mb-2">
                        Regular Fit Blue Slogan
                        </p>
                        {(isDelivered || isRefundCompleted || isReplacementCancelled || isReplacementCompleted) && (
                            <div>
                                
                                <img src={MyOder.ratings} alt="ratings" />
                                <p className="text-zinc-500 text-xs font-normal mb-2">Rate this product now</p>
                            </div>
                        )}
                    </div>
                </div>
                <img src={MyOder.Chevron} width="20px" height="20px" className="rounded-[10px]" />
            </div>
        </Box>
    );
}

export default MobilMyorder;
