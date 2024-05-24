import MobilCustomerOrder from "../../components/authDashboard/MobilCustomerOrder";
import CustomerDetails from "./CustomerDetails";

function CustomerSupport(){
    return(
        <>
         <div className="xl:hidden block">
            <MobilCustomerOrder/>
        </div>
        <div className="xl:block hidden">
              <CustomerDetails/>      
        
        </div>
        </>
       
    )
}
export default CustomerSupport; 