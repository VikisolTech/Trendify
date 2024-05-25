import { Button } from "bootstrap"
import AuthLogo from "../../components/auth/AuthLogo"
import { NavContact } from "../../constants/content/dashboardContent"
import { mainContent } from "../../constants/content/mainContent"
import NavDropdown from "../../components/authDashboard/NavDropDown"

function NavBar() {
    return (
        <div className="hidden xl:flex xl:flex-col">
            <nav >
                <div className="flex justify-between items-center pb-5 pt-5 px-12 ">
                    <div className="flex flex-col items-center xl:flex-row">
                        <img className="w-[70px] h-[70px]" src={mainContent.appLogo} />

                        <p className="text-xl font-poppins font-medium pl-1">
                            {mainContent.appName}
                        </p>
                    </div>

                    <div class="w-[404px] h-[54px] bg-white rounded-[999px] border border-neutral-900">
                        <div className="flex justify-between items-center p-3 cursor-pointer">
                            <div class="text-neutral-900 text-base font-normal font-['Poppins'] leading-tight">Search</div>
                            <img src={NavContact.search} />
                        </div>

                    </div>
                    <div className="flex">
                        <img src={NavContact.person} style={{ width: "40px", height: "40px" }} />
                        <img src={NavContact.basket} style={{ width: "40px", height: "40px" }} />
                    </div>
                </div>

                <div className="bg-[#EEEFFB] border-t-2 border-[#C09562] mx-12 "></div>
            </nav>
           
            <div className="mt-5 flex justify-between items-center px-12"> 
                <div><NavDropdown/></div>
                <div>
                    <div class="w-[103px] h-11 px-5 py-2.5 bg-neutral-900 justify-center items-center gap-2.5 inline-flex cursor-pointer">
                        <div class="text-center text-white text-base font-semibold font-['Raleway'] leading-normal">Register</div>
                    </div>
                    <div class="w-[83px] h-11 px-5 py-2.5 bg-white/opacity-0 border-2 border-[#C09562] justify-center items-center gap-2.5 inline-flex ml-3 cursor-pointer">
                        <div class="text-center text-stone-400 text-base font-semibold font-['Raleway'] leading-normal">Login</div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default NavBar