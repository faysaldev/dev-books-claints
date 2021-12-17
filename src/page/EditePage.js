import React,{useEffect, useState} from 'react'
import AdminSidebar from '../components/AdminPage/AdminSidebar'
import AdminTopNav from '../components/AdminPage/AdminTopNav'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectEditeProduct,editeProductDelete } from '../features/appSlice'
import { TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MobileMenubar from '../components/AdminPage/MobileMenu'



function EditePage() {

    const [dark,setDark]=useState(false);
    const EditeProductData=useSelector(selectEditeProduct);
    const history =useHistory();
    const dispatch = useDispatch();

    // product data
    const [productName,setProductName]=useState('');
    const [category,setCategory]=useState('');
    const [addPrice,setAddPrice]=useState('');
    const [img,setImg]=useState(null);
    const [details,setDetails]=useState('');

    console.log(EditeProductData);

    useEffect(()=>{
        if(!EditeProductData){
            return (history.replace('/'));
        }

        setProductName(EditeProductData?.title);
        setCategory(EditeProductData?.category);
        setAddPrice(EditeProductData?.price);
        setDetails(EditeProductData?.details);

        return ()=>{ dispatch(editeProductDelete()) }
    },[EditeProductData])


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
                    <main>
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
                                <div className='space-y-3 pb-3 col-span-2'>
                                    <h3 className='text-md font-semibold'>Add Price</h3>
                                    
                                    <TextField fullWidth  value={addPrice} onChange={(e)=>setAddPrice(e.target.value) } id="outlined-basic" label="Add Price" variant="outlined" />
                                </div>

                                {/* product deception */}
                                <textarea cols="30" rows="10" name="" className='w-full col-span-2 border border-green-500 rounded-md shadow-md outline-none px-6 py-4' value={details} onChange={(e)=> setDetails(e.target.value)} placeholder='Add a Deception'></textarea>
                            
                                {/* submit button */}
                                <button className="my-6 px-4 py-2 bg-red-600 text-white rounded-md font-bold hover:bg-red-400 shadow" onClick={()=> dispatch(editeProductDelete())}>Cancel</button>

                                <button className="my-6 px-4 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-400 shadow">Save</button>

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

export default EditePage
