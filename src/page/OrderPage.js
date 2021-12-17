import React from 'react'
import Header from '../components/Header'
import Fotter from '../components/Fotter';
import OrderCard from '../components/OrderCard/OrderCard';
import { useSelector } from 'react-redux';
import {selectCartAll, selectTotal} from '../features/appSlice'
import { Button } from '@material-ui/core';

function OrderPage() {

    const cardProduct = useSelector(selectCartAll);
    const Total = useSelector(selectTotal);

    return (
        <div className='orderScreen'>

            <div>
                {/* Header */}
                <Header />
                {/* main */}
                <main className='max-w-6xl mx-auto pt-20'>
                    {/* main top */}
                    <div className='pt-4 pb-10 text-center space-y-2'>
                        {cardProduct.length >0 ? (<>
                            <h2 className='text-3xl text-gray-700 font-semibold'>Thanks for your order :)</h2>
                            <p className='text-md text-gray-600'>Your Order is being processed</p>
                            </>
                        ):(
                            <h2 className='text-3xl text-gray-700 font-semibold'>Your order is being empety ):</h2>
                        )}
                    </div>

                    {/* orderlist */}

                    <div className='px-4 py-3'>

                        {/* order list */}
                        <div className='pt-2 pb-6'>
                            <h3 className='text-xl font-semibold shadow-sm pb-2'>Order List ({cardProduct?.length})</h3>
                            {/* order */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 gap-y-4 pt-4'>
                                {cardProduct?.map(({_id,image,title,category,date,price,})=>(
                                    <OrderCard key={_id} _id={_id} image={image} title={title} category={category} date={date} price={price} />
                                ))}
                            </div>
                        </div>

                        {/* order Details */}
                        {cardProduct.length > 0 && (
                        <div className='py-4 px-4 border-t border-b border-gray-300 shadow hover:shadow-md'>
                            <h2 className='text-2xl font-semibold text-gray-400'>Order Details</h2>        
                            <ul className='text-gray-500 space-y-2 pt-4'>
                                <li className='flex items-center justify-between'>Order number <span>#60c8dea7</span></li>
                                <l className='flex items-center justify-between'>Order Date<span>Tue Jun 15 2021</span></l>
                                <li className='flex items-center justify-between'>Price<span>${Total}</span></li>
                                <li className='flex items-center justify-between'>Shipping<span>$30</span></li>
                                <li className='flex items-center justify-between'>Total Price<span>{Total +30}</span></li>
                            </ul>
                            {/* chekout button */}
                            <div className='py-5'>
                                <Button variant='contained' color='primary' style={{textTransform:'capitalize'}} fullWidth>Processed to payment</Button>
                            </div>
                        </div>
                        )}

                    </div>

                </main>
                {/* footer */}
                <Fotter />
            </div>

        </div>
    )
}

export default OrderPage
