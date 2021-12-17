import React from 'react'
import {MoreHorizOutlined} from '@material-ui/icons'

function OrderCard({_id,image,title,category,date,price,}) {
    return (
        <div className='flex items-center cursor-pointer hover:shadow-md shadow border border-gray-200 p-4'>
           <div className='rounded-md w-28'>
               <img src={image} alt=""  className='w-full object-fill'/>
           </div>

            {/* Icon remove and outher */}
           <div>
            <MoreHorizOutlined />
           </div>

           <div className='pl-10'>
               <h3 className='text-xl font-semibold pb-3'>{title}</h3>
               <p className='text-md text-gray-400'>{category}</p>
               <h4 className='text-md text-gray-400'>Tue Jun 15 2021</h4>
                <span className='text-md text-gray-400'>$ {price}</span>
           </div>
        </div>
    )
}

export default OrderCard
