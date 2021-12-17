import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {prevSingleProduct,selectSingle} from '../../features/appSlice'
import {useHistory} from 'react-router-dom'
import { selectUser } from '../../features/userSlice';


function SingleCard({_id,image,price,title,details,category}) {

    const dispatch = useDispatch();

    const singleProductData = useSelector(selectSingle);
    const history=useHistory();
    const userData =useSelector(selectUser);

    const buyNow =()=>{
        if(userData){
            return;
        }else{
            history.push('/login')
        }
    }

    const productClick=()=>{
        dispatch(prevSingleProduct({_id,image,price,title,details,category}));
        history.push('/single')
    }


    return (
        <div key={_id} className='shadow-md hover:shadow-xl cursor-pointer px-4 py-6'>
            <div className='bg-gray-200 rounded-md mx-auto' onClick={productClick} style={{width:'310px'}}>
                <img src={image? URL.createObjectURL(image):'/engineers-day-concept_23-2148628083.jpg'} alt={image} className='px-2 py-2 object-contain w-full rounded-md' />
            </div>
            {/* card top */}

            <div className='text-2xl md:text-3xl font-semibold py-4'>
                <h2>{title}</h2>
            </div>

            <div className='flex items-center justify-between px-3 py-3'>
                <h3 className='text-4xl font-bold text-blue-500'>${price}</h3>
                <button className='px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-400 transition' onClick={buyNow}>Buy Now</button>
            </div>
            {/* card bottom */}
        </div>
    )
}

export default SingleCard
