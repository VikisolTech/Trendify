import AddNewAddressFrom from "../../components/authDashboard/AddNewAddressForm"
import { AddressContact } from "../../constants/content/dashboardContent"
export function AddNewAddress({handleClose}) {
    return (

        <div className=" w-[520px]  box-border items-start border-neutral-200 h-fit flex justify-center flex-col relative overflow-x-hidden ">
          


                <div className="flex justify-between items-start w-full">
                    <p className="text-neutral-800 text-[25px] font-normal  text-center">{AddressContact.AddressType}</p>
                    <button onClick={handleClose} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                </div>
                <div className="flex flex-col gap-2 my-5 w-full">
                    <AddNewAddressFrom />
                </div>
           



        </div>


    )
}
export default AddNewAddress