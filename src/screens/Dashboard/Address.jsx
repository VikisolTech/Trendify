
import GenericButton from "../../components/authDashboard/GenericButton"
import AddressElement from "../../components/authDashboard/AddressElement"
import { AddressContact } from "../../constants/content/dashboardContent"
import AddNewAddress from "./AddNewAddress"
import { Dialog, DialogContent } from "@mui/material"
import React from "react"

export function AddressComponent() {
    const AddressList = [{
        title: "home",
        address: "08 gujar pura, huzur ,peer gate , bhopal , Madhya Paresh - 462001",
        number: '7024393158',
    },
    {
        title: "office",
        address: "08 gujar pura, huzur ,peer gate , bhopal , Madhya Paresh - 462001",
        number: '7024393158',
    },
    {
        title: "office",
        address: "08 gujar pura, huzur ,peer gate , bhopal , Madhya Paresh - 462001",
        number: '7024393158',
    },
    {
        title: "realitve home",
        address: "08 gujar pura, huzur ,peer gate , bhopal , Madhya Paresh - 462001",
        number: '7024393158',
    }

    ]
    const [open, setOpen] = React.useState(false);
  
   
  
    const handleClose = () => {
      setOpen(false);
    };


    return (

        <div className="whiteCard h-fit flex flex-col px-8 pt-6 pb-9 items-center">
            <p className="font-poppins text-black text-xl my-4 w-full xl:mt-10 text-start  xl:text-[28px] ">
                {AddressContact.manageAddress}
            </p>
            
            <div className="grid xl:grid-cols-2 grid-cols-1 h-fi gap-x-[30px] gap-y-[10px] m-10">
                {
                    AddressList.map((item) => {
                        return < AddressElement data={item} />
                    }
                    )
                }
            </div>
            <div className="flex">
                <GenericButton onClick={()=>setOpen(true)} label={AddressContact.AddressType} height={'h-[54px]'} width={'w-[340px]'} image={AddressContact.plusImage}
                />
            </div>
          
            <Dialog onClose={() => { }} open={open} scroll={"paper"} sx={{
                "& .MuiPaper-root": {
                    borderRadius: "20px",
                    border: " 1px solid var(--Gray-300, #BBB)",
                    background: "#FFF",
                    boxShadow: " 4px 4px 20px 0px rgba(0, 0, 0, 0.35)"
                }
            }} >
                <DialogContent>
                    <AddNewAddress handleClose={handleClose}/>
                </DialogContent>

            </Dialog>


        </div>
    )
}

export default AddressComponent;