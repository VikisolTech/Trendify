import MobilSupportOrder from "../../components/authDashboard/MobilSupportOrder";


function CustomerServices(){
    return(
        <>
         <div className="xl:hidden block  ">
            <MobilSupportOrder/>

        </div>
        {/* <div className="xl:block hidden w-[100%]">
              <CustomerDetails/>      
        
        </div> */}
        </>
       
    )
}
export default CustomerServices; 