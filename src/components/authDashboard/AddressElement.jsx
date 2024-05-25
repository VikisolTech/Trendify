import { Radio } from "@mui/material";
import { AddressContact } from "../../constants/content/dashboardContent";



function AddressElement({ data,isSelected,onSelect }) {
    console.log(isSelected);

    return (
        <div className="  p-5 bg-white rounded-[10px] shadow border border-neutral-200 " >
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src={AddressContact.AdressLocationImg} className="w-7 h-7 cursor-pointer mt-[5px]" />
                    <p className="font-semibold">{data.title}</p>
                </div>
                <div>
                    <Radio checked={isSelected} onChange={onSelect}/>
                </div>
            </div>
            <div className="cursor-pointer pt-0 pb-0 pl-7 pr-7 mt-[-10px]">
                <p className="text-[17px] font-normal text-[#808080]">{data.address} <br/> {data.number}</p>
            </div>

        </div>
    )
}
export default AddressElement;

