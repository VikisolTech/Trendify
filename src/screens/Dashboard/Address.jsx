
import GenericButton from "../../components/authDashboard/GenericButton"
import AddressElement from "../../components/authDashboard/AddressElement"
import { AddressContact, NavContact } from "../../constants/content/dashboardContent"
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
    const [allowPopup, setAllowPopup]=React.useState(false);
    const [selectedIndex, setSelectedIndex]=React.useState(0)



    const handleClose = () => {
        setOpen(false);
        setAllowPopup(false);
    };


    return (
        <>
            {(!open || allowPopup)&& <div className=" xl:whiteCard h-fit flex flex-col xl:px-8 px-4 xl:pt-6 pt-14 pb-9 items-center w-full">
                <div className="w-full mb-4 flex">

                <img className="lg:hidden w-auto" src={NavContact.Arrow}/>
                <p className="font-poppins text-black text-xl  w-full lg:text-start text-center  xl:text-[28px] ">
                    {AddressContact.manageAddress}
                </p></div>
                <div className="border border-[#E6E6E6] w-full xl:hidden mb-4">

            </div>

                <div className="grid xl:grid-cols-2 grid-cols-1 h-fi gap-x-[30px] gap-y-[10px] xl:m-10 mb-10 w-full">
                    {
                        AddressList.map((item,index) => {
                            return < AddressElement data={item} isSelected={selectedIndex==index} onSelect={()=>setSelectedIndex(index)}/>
                        }
                        )
                    }
                </div>
                <div className="flex xl:hidden">
                    <GenericButton onClick={() => setOpen(true)} label={AddressContact.AddressType} height={'h-[54px]'} width={'w-[340px]'} image={AddressContact.plusImage}
                    />
                </div>
                <div className="xl:flex  hidden">
                    <GenericButton onClick={() => {setOpen(true)
                        setAllowPopup(true)
                    }} label={AddressContact.AddressType} height={'h-[54px]'} width={'w-[340px]'} image={AddressContact.plusImage}
                    />
                </div>




            </div>}
            {open &&!allowPopup && <AddNewAddress handleClose={handleClose} />}


            <Dialog onClose={() => { }} open={open && allowPopup} scroll={"paper"} sx={{
                "& .MuiPaper-root": {
                    borderRadius: "20px",
                    border: " 1px solid var(--Gray-300, #BBB)",
                    background: "#FFF",
                    boxShadow: " 4px 4px 20px 0px rgba(0, 0, 0, 0.35)"
                }
            }} >
                <DialogContent>
                    <AddNewAddress handleClose={handleClose} />
                </DialogContent>

            </Dialog>
        </>
    )
}

export default AddressComponent;