
import DesktopMyorder from "./DesktopMyorder";
import GenericButton from "./GenericButton";

export function MyOrderLeftSide() {
    const data = [{ isDelivered: true }, { isRefundCompleted: true }, { isReplacementCompleted: true }, { isReplacementCancelled: true },{isCancelled:true}]
    return (
        <div>
            {data.map((item) => <DesktopMyorder data={item} />)}
            <div className="flex justify-center mt-4">
            <GenericButton label='Show more orders' width={'w-[237px]'}  height={'h-[54px]'}/>
            </div>
            
        </div>

    )
}



export default MyOrderLeftSide;