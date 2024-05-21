import { mainContent } from "../../constants/content/mainContent"
import { FooterContact } from "../../constants/content/dashboardContent"
import FooterImages from "../../components/authDashboard/FooterImages"
export function Footer() {
    return (
        <div className="hidden xl:flex flex-col"> 
            <div class="bg-[#EEEFFB] h-[340px] w-full flex justify-evenly items-stretch p-12">

                <div className="max-w-[1224px] flex justify-between items-start w-full">
                    <div>
                        <p className="Footer">{mainContent.appName}</p>
                        <p className="FooterContent">Contact Info</p>
                        <p className="FooterContent">08 gujar pura , peer gate , huzur , Bhopal - 4662001</p>
                    </div>

                    <div>
                        <p className="Footer">{FooterContact.Catagories}</p>
                        <p className="FooterContent">Laptops & Computers</p>
                        <p className="FooterContent">Cameras & Photography</p>
                        <p className="FooterContent">Smart Phones & Tablets</p>
                        <p className="FooterContent">Video Games & Consoles</p>
                        <p className="FooterContent">Waterproof Headphones</p>
                    </div>
                    <div>
                        <p className="Footer">{FooterContact.CustomerCare}</p>
                        <p className="FooterContent">My Account</p>
                        <p className="FooterContent">Discount</p>
                        <p className="FooterContent">Returns</p>
                        <p className="FooterContent">Orders History</p>
                        <p className="FooterContent">Order Tracking</p>
                    </div>
                    <div>
                        <p className="Footer">{FooterContact.Pages}</p>
                        <p className="FooterContent"> Blog</p>
                        <p className="FooterContent">Browse the Shop</p>
                        <p className="FooterContent"> Category</p>
                        <p className="FooterContent">Pre-Built Pages</p>
                        <p className="FooterContent">Visual Composer Elements</p>
                        <p className="FooterContent">WooCommerce Pages</p>
                    </div>
                </div>

            </div>
            <div className="bg-[#EEEFFB] border-t-2 border-[#C09562]  ">
                <div className="p-5 flex">
                    <div className="flex flex-grow justify-around">


                        <div className="flex items-center">
                            <img src={FooterContact.Seller} className="w-5 h-5"/>
                            <p>Become a Seller</p>
                        </div>
                        <div className="flex items-center">
                            <img src={FooterContact.Advertise} className="w-5 h-5" />
                            <p>Advertise</p>
                        </div>
                        <div className="flex items-center">
                            <img src={FooterContact.giftCard}  className="w-5 h-5"/>
                            <p>Gift Cards</p>
                        </div>
                        <div className="flex items-center">
                            <img src={FooterContact.help} className="w-5 h-5" />
                            <p>Help Center</p>
                        </div>
                        <p>© 2023-2024 trendify.com</p>
                    </div>
                    <FooterImages />
                </div>
                



            </div>

            </div>





    )
}
export default Footer





