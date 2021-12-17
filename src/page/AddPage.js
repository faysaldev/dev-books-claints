import { TextField } from '@mui/material';
import React,{useState} from 'react'
import AdminSidebar from '../components/AdminPage/AdminSidebar'
import AdminTopNav from '../components/AdminPage/AdminTopNav'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectUser } from '../features/userSlice';
import { useEffect } from 'react';
import { addAProduct } from '../features/appSlice';
import MobileMenubar from '../components/AdminPage/MobileMenu';

function AddPage() {

    const userData =useSelector(selectUser);
    const itsAdmin = userData?.role ==='admin';

    const [dark,setDark]=useState(false);
    const [productName,setProductName]=useState('');
    const [category,setCategory]=useState('');
    const [addPrice,setAddPrice]=useState('9');
    const [img,setImg]=useState(null);
    const [details,setDetails]=useState('');

    // user info state
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [userPhoto,setUserPhoto]=useState(null);
    const [role,setRole]=useState('admin');
    console.log(role)


    // dispatch
    const dispatch = useDispatch();


    // image handler
    const imageHandler=(e)=>{
        e.preventDefault();
        const uploadImage =e.target.files[0];
        console.log(uploadImage);


        

        if(uploadImage =="" || uploadImage=== undefined){
            alert(`not an image, file is a${uploadImage.type}`);
        }else{
            setImg(uploadImage);
        }

        
    }


    // user photo image handler
    const UserimageHandler=(e)=>{
        e.preventDefault();
        const uplodedUserImage =e.target.files[0];
        console.log(uplodedUserImage);


        

        if(uplodedUserImage =="" || uplodedUserImage=== undefined){
            alert(`not an image, file is a${uplodedUserImage.type}`);
        }else{
            setUserPhoto(uplodedUserImage);
        }
    }

    const reset=()=>{
        setName('');
        setEmail('');
        setPassword('');
        setRole('admin');
        setUserPhoto(null);
    }

    const resetProdect=()=>{
        setProductName('');
        setCategory('');
        setAddPrice('');
        setDetails('');
        setImg(null);
    }


    const CreateAnUser=()=>{
        const userId=Math.floor(Math.random() *100 );
        dispatch(addUser({id:userId,name,email,password,role,photoURL:userPhoto}));
        reset();

    }


    const saveProduct=()=>{
        const postId=Math.floor(Math.random()*1000);
        dispatch(addAProduct({
            id:postId,
            image:img,
            price:addPrice,
            title:productName,
            details,
            category,
            username:userData.name,
            userImg:userData.photoURL,
        }));
        resetProdect();
    }


    // useEffect(()=>{

    // },[])


    return (
        <>
        <div className='adminScreen min-h-screen pt-10 px-2' style={{ backgroundImage:`url(${'/bg.jpg'})`,backgroundSize:'cover',backgroundRepeat:'no-repet' }}>
            <div className={`flex max-w-6xl pt-4 shadow-md rounded-lg mx-auto ${dark?'bg-black text-white':'bg-white text-black'}`}>
                {/* Adminpage sidebar */}
                <AdminSidebar dark={dark} setDark={setDark} />

                <div className='flex-grow'>
                    {/* adminpage top nav */}
                    <AdminTopNav />
                    {/* admin page main content */}
                    <main className={`px-4 grid grid-cols-1 ${itsAdmin && 'md:grid-cols-2'} gap-y-4`}>
                        {/* Add Product Section */}
                        <div className='pr-10 border-r'>
                            {/* Add Product page top */}
                            <h1 className='text-xl font-semibold pb-4'>Add A New Product</h1>
                            <div className='w-full grid grid-cols-2 gap-x-3'>
                                <div className='space-y-3 pb-3'>
                                    <h3 className='text-md font-semibold'>Product Name</h3>
                                    <TextField fullWidth value={productName} onChange={(e)=>setProductName(e.target.value) } id="outlined-basic" label="Product Name" variant="outlined" />
                                </div>

                                {/* category */}
                                <div className='space-y-3 pb-3'>
                                    <h3 className='text-md font-semibold'>Category</h3>
                                    <TextField fullWidth value={category} onChange={(e)=>setCategory(e.target.value) } id="outlined-basic" label="Category" variant="outlined" />
                                </div>

                                {/* Add Price */}
                                <div className='space-y-3 pb-3'>
                                    <h3 className='text-md font-semibold'>Add Price</h3>
                                    
                                    <TextField fullWidth value={addPrice} type='number' inputProps={{inputProps:{min:1,max:3000}}} onChange={(e)=>setAddPrice(e.target.value) } id="outlined-basic" label="Add Price" variant="outlined" />
                                </div>

                                {/* add Photo */}
                                <div className='space-y-3'>
                                    <input className='hidden' onChange={imageHandler} type="file" accept="image/gif,image/jpg,image/png,image/jpeg" name='file' />
                                    <h3 className='text-md font-semibold'>Product Photo</h3>
                                    {/*  top input is the hidden input bar */}
                                    <button className='px-6 py-2 rounded-md shadow text-green-500 font-bold bg-green-50 border-green-500 border' onClick={()=> document.querySelector('input.hidden').click()}>Upload <CloudUploadIcon /></button>
                                </div>

                                {/* product deception */}
                                <textarea cols="30" rows="10" name="" className='w-full col-span-2 border border-green-500 rounded-md shadow-md outline-none px-6 py-4' value={details} onChange={(e)=> setDetails(e.target.value)} placeholder='Add a Deception'></textarea>
                            
                            {/* submit button */}
                            <button onClick={saveProduct} className="my-6 px-4 py-2 bg-green-600 text-white rounded-md font-bold hover:bg-green-400 shadow">Save</button>

                            </div>
                        </div>


                {/* chek its admin */}
                {itsAdmin && (
                        // {/* Add User secton */}
                        <div className='pl-10'>
                            <h1 className='text-xl font-semibold pb-4'>Add a New User</h1>
                            {/* users add */}
                            <div className='w-full grid grid-cols-2 gap-x-3'>
                                <div className='space-y-3 pb-3'>
                                    <h3 className='text-md font-semibold'>Name</h3>
                                    <TextField value={name} onChange={(e)=>setName(e.target.value) } id="outlined-basic" label="Username" variant="outlined" />
                                </div>
                                {/* email */}

                                <div className='space-y-3 pb-3'>
                                    <h3 className='text-md font-semibold'>Email Addres</h3>
                                    <TextField type='email' value={email} onChange={(e)=>setEmail(e.target.value) } id="outlined-basic" label="email" variant="outlined" />
                                </div>
                                {/* password */}
                                <div className='space-y-3 pb-3'>
                                    <h3 className='text-md font-semibold'>Password</h3>
                                    <TextField type='password' value={password} onChange={(e)=>setPassword(e.target.value) } id="outlined-basic" label="password" variant="outlined" />
                                </div>
                                {/* userphoto */}
                                <div className='space-y-3'>
                                    <input className='hidden user' onChange={UserimageHandler} type="file" accept="image/gif,image/jpg,image/png,image/jpeg" name='file' />
                                    {/*  top input is the hidden input bar */}
                                    <h3 className='text-md font-semibold'>User Photo</h3>
                                    <button className='px-6 py-2 rounded-md shadow text-blue-500 font-bold bg-blue-50 border-blue-400 border' onClick={()=> document.querySelector('input.user').click()}>User-Photo <CloudUploadIcon /></button>
                                </div>

                                {/* role */}
                                <select className='w-full col-span-2 border border-green-500 rounded-md shadow-md outline-none px-4 py-2' name="" id="" onChange={(e)=> setRole(e.target.value)}>
                                    <option className='bg-green-400 py-3 shadow' value="admin">admin</option>
                                    <option className='bg-green-400 py-3 shadow' value="user">user</option>
                                </select>

                                {/* submit button */}
                                <button onClick={CreateAnUser} className="my-6 px-4 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-400 shadow">Save</button>

                            </div>
                        </div>
                    
                )}
                    </main>
                </div>

            </div>
        </div>
        <MobileMenubar />
        
        </>
    )
}

export default AddPage