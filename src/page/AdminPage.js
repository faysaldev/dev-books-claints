import React,{useEffect, useState} from 'react'
import AdminSidebar from '../components/AdminPage/AdminSidebar'
import AdminTopNav from '../components/AdminPage/AdminTopNav'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LiveSingleCard from '../components/AdminPage/LiveSingleCard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import OrderLIstCard from '../components/AdminPage/OrderLIstCard';
import Data from '../components/AdminPage/demoInfo'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { useHistory } from 'react-router-dom';
import MobileMenubar from '../components/AdminPage/MobileMenu';

function AdminPage() {

    const [dark,setDark]=useState(false);
    const userData =useSelector(selectUser);
    const history = useHistory();
    useEffect(()=>{
        if(userData?.role==='user'){
            return history.replace('/admin-add-page');
        }
    },[userData])


    return (
        <>
        <div className='adminScreen min-h-screen pt-10 px-2' style={{ backgroundImage:`url(${'/bg.jpg'})`,backgroundSize:'cover',backgroundRepeat:'no-repet' }}>
            <div className={`flex max-w-6xl pt-4 shadow-md rounded-lg mx-auto ${dark?'bg-black':'bg-white text-black'}`}>
                {/* Adminpage sidebar */}
                <AdminSidebar dark={dark} setDark={setDark} />

                <div className='flex-grow'>
                    {/* adminpage top nav */}
                    <AdminTopNav dark={dark} />
                    {/* admin page main content */}
                    <main className='px-6 py-8 bg-red-50 rounded-md h-screen overflow-y-scroll' id='scrollbarHide'>
                        {/* live order */}
                        <div className='px-2 py-3 space-y-6'>
                            <h2 className='text-xl font-semibold'>Live Orders</h2>
                            {/* live order card */}
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 sm:gap-x-6'>
                                {/* single card 1 */}
                                <LiveSingleCard Icon={CardGiftcardIcon} number='47' text='Orders' bg='bg-yellow-200' color='text-yellow-700' />
                                <LiveSingleCard Icon={ShoppingBasketIcon} number='56' text='Total Pending' bg='bg-blue-200' color='text-blue-700' />
                                <LiveSingleCard Icon={LocalAtmIcon} number='26' text='Total Dispatch' bg='bg-green-200' color='text-green-700' />

                            </div>
                        </div>

                        {/* orders */}
                        <div className='py-6'>
                            {/* orders top */}
                            <div className='flex items-center justify-between pb-6'>
                                <h1 className='text-xl font-semibold'>Orders</h1>
                                <select className='px-4 py-3 border shadow focus-within:shadow-md focus-within:ring-1 bg-white rounded-md pr-6 outline-none cursor-pointer'>
                                    <option className='px-4 py-3 text-gray-500' value="Recent Orders">Recent Orders</option>
                                    <option className='px-4 py-3 text-gray-500' value="Today">Today</option>
                                    <option className='px-4 py-3 text-gray-500' value="Yeasterday">Yeasterday</option>
                                    <option className='px-4 py-3 text-gray-500' value="Last Week">Last Week</option>
                                    <option className='px-4 py-3 text-gray-500' value="Last Mounth">Last Mounth</option>
                                </select>
                            </div>

                            {/* orders middle nav */}
                            <div>
                                <ul className='flex items-center justify-between px-4 py-3 bg-white rounded-md shadow text-gray-600 text-xs md:text-md font-semibold sticky top-0 z-10 mb-4'>
                                    <li className='cursor-pointer'>Id <ArrowDropDownIcon /></li>
                                    <li className='cursor-pointer'>Name</li>
                                    <li className='cursor-pointer'>Payment</li>
                                    <li className='cursor-pointer'>Time remaining <ArrowDropDownIcon /></li>
                                    <li className='cursor-pointer'>Type</li>
                                    <li className='cursor-pointer'>Status</li>
                                    <li className='cursor-pointer'>Total</li>
                                    <li className='cursor-pointer'>Action</li>
                                </ul>

                                {/* order list */}
                                <ul className='space-y-5'>
                                    {Data?.map(({id,image,username,payment,time,type,total})=>(

                                        <OrderLIstCard id={id} image={image} username={username} payment={payment} time={time} type={type} total={total} />

                                    ))}
                                </ul>
                            </div>



                        </div>
                    </main>
                </div>

            </div>
        </div>
            <MobileMenubar />
        </>
    )
}

export default AdminPage
