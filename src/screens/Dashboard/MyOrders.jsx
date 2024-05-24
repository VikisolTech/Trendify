import React, { useState } from 'react';
import { Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckboxGroup from '../../components/authDashboard/CheckBoxGroup';
import MyOrderLeftSide from '../../components/authDashboard/MyorderLeftSide';
import { MyOder, NavContact } from '../../constants/content/dashboardContent';
import GenericButton from '../../components/authDashboard/GenericButton';


const MyOrders = () => {
    const dateOptions = [
        "Last 30 days",
        "2023",
        "2022",
        "Other"
    ];

    const statusOptions = [
        "On the way",
        "Delivered",
        "Cancelled",
        "Returned"
    ];

    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (event) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked
        });
    };

    return (
        <div className="whiteCard h-fit flex flex-col xl:px-8 px-4 xl:pt-6 pt-14 pb-9 items-center w-full">
            <div className="w-full mb-4 xl:w-full">
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} className='hidden xl:block '>
                        <Card className='h-full'
                            sx={{ padding: "16px", height: "500px", marginTop: "30px" }}>
                            <CheckboxGroup
                                title="Order Status"
                                options={statusOptions}
                                checkedItems={checkedItems}
                                onChange={handleCheckboxChange}
                            />
                            <div className="border border-[#E6E6E6] w-full  mb-3 mt-3"></div>
                            <CheckboxGroup
                                title="Order Time"
                                options={dateOptions}
                                checkedItems={checkedItems}
                                onChange={handleCheckboxChange}
                            />
                            <div className='flex xl:hidden justify-around '>
                                <GenericButton isSecondaryButton={true} label='Back' width={'w-[112px]'} height={'h-[38px]'} />
                                <GenericButton label='Apply Filter' width={'w-[112px]'} height={'h-[38px]'} />
                            </div>
                        </Card>
                    </Grid>

                    <Grid item xs={12} xl={9} className='' sx={{ width: "100%" }}>
                        <div className='hidden xl:flex'>
                            <div class="w-[100%] h-[54px] bg-white border border: 1px solid #DBDBDB rounded-tl">
                                <div className="flex justify-between items-center cursor-pointer">
                                    <div class="text-neutral-900 text-base  font-family: Roboto; leading-tight pl-3">Search your orders here</div>

                                    <div className='flex'>
                                        <img src={NavContact.searchbar} alt="Search" className='absolute mt-[18px] ml-[30px]' />
                                        <GenericButton label="Search" height={'h-[52px]'} width={'w-[165px]'} />
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className="w-full mb-4 flex xl:hidden">

                            <img className="lg:hidden w-auto" src={NavContact.Arrow} />
                            <p className="font-poppins text-black text-xl  w-full lg:text-start text-center  xl:text-[28px] ">
                                {MyOder.myOrders}
                            </p></div>
                        <div className="border border-[#E6E6E6] w-full xl:hidden mb-4"></div>
                            <div className='flex xl:hidden gap-2'>
                                <div class="w-[100%] h-[54px] bg-white border border: 1px solid #DBDBDB rounded-tl">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div className='flex items-center'>
                                            <img src={NavContact.SearchTwo} alt="Search" className=' mt-[18px] ml-[30px]' />
                                            <div class="text-neutral-900 text-base  font-family: Roboto; leading-tight mt-[18px] pl-3">Search Order</div>
                                        </div>
                                    </div>

                                </div>
                                <img src={MyOder.filters} className='cursor-pointer'/>
                            </div>


                            <MyOrderLeftSide />

                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default MyOrders;
