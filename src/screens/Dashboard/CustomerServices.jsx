import DashboardCustomerSupport from "../../components/authDashboard/DashboardCustomerSupport";
import MobilSupportOrder from "../../components/authDashboard/MobilSupportOrder";


function CustomerServices(){
    return(
        <>
         <div className="xl:hidden block  ">
            <MobilSupportOrder/>

        </div>
        <div className="xl:block hidden w-[100%]">
              <DashboardCustomerSupport/>      
        
        </div>
        </>
       
    )
}
export default CustomerServices; 