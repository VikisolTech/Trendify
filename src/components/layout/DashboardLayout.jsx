import React from "react";
import { useState } from "react";
import { AuthRoutes } from "../../constants/routes";
import { Address } from "../../constants/content/dashboardContent";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./MainLayout";

export function DashboardLayout({ selectedIndex = 0, children }) {

    const dashboardElements = [{title:"Personal Information",url:"/personal-information"},
    {title: "My Orders",url:"/my-order"},
    {title:"Manage Address",url:"/manage-address"},
    // {title:"Manage Cards",url:"/manage-cards"},
    {title:"Customer Support",url:"/customer-support"},{title:"Logout"}]
    const [selectedItem, setSelectedItem] = useState(dashboardElements[selectedIndex])
    return (
        <div className=" xl:p-16 bg-white w-full flex flex-col ">
            <p className=" text-neutral-800 text-[27px] font-medium mb-14 hidden xl:block">{selectedItem.title}</p>
            <div className="flex gap-12 w-full">
                <div id="leftMenu" className="w-80  gap-9 xl:flex flex-col justify-start  hidden">

                    <div className=" flex-col flex justify-start items-start gap-4 ">

                        {
                            dashboardElements.map((item, index) => {
                                return (
                                    <div className={`listContainer ${index == selectedIndex ? 'selectedMenuItem' : 'listItem'} cursor-pointer`} 
                                    onClick={() => {
                                        if(item.url){
                                            window.location.href=item.url
                                        }
                                        
                                         }}>
                                        <p  >{item.title}</p>
                                    </div>
                                )
                            })
                        }



                    </div>
                </div>
                <div id="rightContent" className="w-full flex justify-center">
                    {children}
                </div>
            </div>

        </div>
    )
}
function Dashboard({ children, selectedIndex }) {
    return (

        <MainLayout>
            <DashboardLayout selectedIndex={selectedIndex}>
                {children}
            </DashboardLayout>
        </MainLayout>

    )
}
export default Dashboard;