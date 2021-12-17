import React,{useState} from 'react'
import {Avatar,Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { editeSingleProduct } from '../../features/appSlice';


function AdminSingleProduct({id,img,title,username,userImage,price,details,category,}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const editeHandler=(id)=>{
       dispatch(editeSingleProduct({id,img,title,username,userImage,price,details,category}));
       history.push('/admin-edite-page');
    }

    const deleteHandler=(id)=>{
        alert(id)
    }

    return (
        <div className='border shadow rounded-md cursor-pointer hover:shadow-lg px-4 py-6'>
               <div>
               <img src={img?URL.createObjectURL(img):'/engineers-day-concept_23-2148628083.jpg'} className='w-full object-contain' style={{maxWidth:'335px'}} alt="" />
               </div>

            {/* title */}
            <div className='py-4 space-y-4'>
                <h3 className='text-md sm:text-xl font-semibold'>{title}</h3>
                <div className='flex items-center space-x-5'>
                    <Avatar src={userImage? URL.createObjectURL(userImage):'/IMG_2580.jpg'}/>
                    <p className='font-bold'>{username}</p>
                </div>
            {/* button */}
                <div className='flex items-center justify-evenly'>
                    <Button variant='contained' color='secondary' onClick={()=> editeHandler(id)}>Edite</Button>
                    <Button variant='outlined' color='error' onClick={()=> deleteHandler(id)}>Delete</Button>
                </div>
            </div>

        </div>
    )
}

export default AdminSingleProduct
