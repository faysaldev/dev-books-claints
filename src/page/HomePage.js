import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Header from '../components/Header'
import Fotter from '../components/Fotter';
import SingleCard from '../components/homeSngleCard/SingleCard';
import { useSelector } from 'react-redux';
import { selectAll } from '../features/appSlice';

function HomePage() {

    const [search,setSearch]=useState('');
    const allP=useSelector(selectAll);
    const [allProduct,setAllProduct] = useState(allP)


    const data=[
        {
            _id:1,
            image:'/engineers-day-with-safety-helmet_23-2148637497.jpg',
            title:"Javascript Everywhere",
            price:76,
            details:'To control the gradient color stops of an element on focus, add the focus: prefix to any existing gradient color stop utility. For example, use focus:bg-blue-500 to apply the bg-blue-500 utility on focus.',
            category:"Programming Codin"
        },
        {
            _id:1,
            image:'/engineers-day-with-safety-helmet_23-2148637497.jpg',
            title:"Javascript Everywhere",
            price:98,
            details:'To control the gradient color stops of an element on focus, add the focus: prefix to any existing gradient color stop utility. For example, use focus:bg-blue-500 to apply the bg-blue-500 utility on focus.',
            category:"Programming Codin"
        },
        {
            _id:1,
            image:'/engineers-day-with-safety-helmet_23-2148637497.jpg',
            title:"Javascript Everywhere",
            price:56,
            details:'To control the gradient color stops of an element on focus, add the focus: prefix to any existing gradient color stop utility. For example, use focus:bg-blue-500 to apply the bg-blue-500 utility on focus.',
            category:"Programming Codin"
        },
        {
            _id:1,
            image:'/engineers-day-with-safety-helmet_23-2148637497.jpg',
            title:"Javascript Everywhere",
            price:23,
            details:'To control the gradient color stops of an element on focus, add the focus: prefix to any existing gradient color stop utility. For example, use focus:bg-blue-500 to apply the bg-blue-500 utility on focus.',
            category:"Programming Codin"
        },
        {
            _id:1,
            image:'/engineers-day-with-safety-helmet_23-2148637497.jpg',
            title:"Javascript Everywhere",
            price:348,
            details:'To control the gradient color stops of an element on focus, add the focus: prefix to any existing gradient color stop utility. For example, use focus:bg-blue-500 to apply the bg-blue-500 utility on focus.',
            category:"Programming Codin"
        },
        {
            _id:1,
            image:'/engineers-day-with-safety-helmet_23-2148637497.jpg',
            title:"Javascript Everywhere",
            price:6565,
            details:'To control the gradient color stops of an element on focus, add the focus: prefix to any existing gradient color stop utility. For example, use focus:bg-blue-500 to apply the bg-blue-500 utility on focus.',
            category:"Programming Codin"
        },
        {
            _id:1,
            image:'/engineers-day-with-safety-helmet_23-2148637497.jpg',
            title:"Javascript Everywhere",
            price:6565,
            details:'To control the gradient color stops of an element on focus, add the focus: prefix to any existing gradient color stop utility. For example, use focus:bg-blue-500 to apply the bg-blue-500 utility on focus.',
            category:"Programming Codin"
        },
        {
            _id:1,
            image:'/engineers-day-with-safety-helmet_23-2148637497.jpg',
            title:"Javascript Everywhere",
            price:6565,
            details:'To control the gradient color stops of an element on focus, add the focus: prefix to any existing gradient color stop utility. For example, use focus:bg-blue-500 to apply the bg-blue-500 utility on focus.',
            category:"Programming Codin"
        },
        {
            _id:1,
            image:'/engineers-day-with-safety-helmet_23-2148637497.jpg',
            title:"Javascript Everywhere",
            price:6565,
            details:'To control the gradient color stops of an element on focus, add the focus: prefix to any existing gradient color stop utility. For example, use focus:bg-blue-500 to apply the bg-blue-500 utility on focus.',
            category:"Programming Codin"
        },
    ];

    // setProject(() => ProjectData.filter((item) => item.title.toLocaleLowerCase().match(searchText.toLocaleLowerCase())))

    const searchBar=()=>{
        if (search === '') return;

        setAllProduct(() => allProduct.filter((item) => item.title.toLocaleLowerCase().match(search.toLocaleLowerCase())));
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);

        if (!e.target.value.length > 0) {
            setAllProduct(allP);
        }
    }


    return (
        <div className="homeScreen">
            <div>
                {/* header */}
                <Header />
                {/* main */}

                <main className='max-w-6xl mx-auto pt-40'>
                      {/* home search bar input  */}
                      <div className='flex items-center justify-between max-w-sm sm:max-w-lg mx-auto p-3 bg-white text-gray-600 border rounded-md shadow hover:shadow-xl focus-within:shadow-xl'>
                          <SearchIcon className='mr-4' />
                          <input value={search} onChange={handleChange} type="text" placeholder="Search" className="flex-1 bg-transparent outline-none border-none h-full text-black" />
                            {/* only show the when the searchbar is full */}

                          <div onClick={searchBar} className='px-8 hidden md:flex py-2 rounded-md bg-gradient-to-tr from-green-400 to-blue-500 text-white cursor-pointer'>
                            <button>SEARCH</button>
                          </div>
                      </div>


                {/* content feed */}

                <div className='pt-10 sm:pt-16 px-6 grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8'>

                    {allProduct?.map(({id,image,price,title,details,category})=>(
                        <SingleCard _id={id} title={title} price={price} category={category} details={details} image={image}  />
                    ))}

                </div>

                {/* fotter content */}
                

                </main>
                <Fotter />

            </div>
        </div>
    )
}

export default HomePage
