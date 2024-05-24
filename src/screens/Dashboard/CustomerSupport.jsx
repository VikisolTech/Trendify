import MobilCustomerOrder from "../../components/authDashboard/MobilCustomerOrder";
import CustomerDetails from "./CustomerDetails";

function CustomerSupport(){
    return(
        <>
         <div className="xl:hidden block  ">
            <MobilCustomerOrder/>
        </div>
        <div className="xl:block hidden w-[100%]">
              <CustomerDetails/>      
        
        </div>
        </>
       
    )
}
export default CustomerSupport; 