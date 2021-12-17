import React from 'react'
import {Link} from 'react-router-dom'


function AdminSidebarCard({Icon,text,active,url}) {
    return (
        <Link to={url} className={`flex items-center px-4 py-3 rounded-md ${active && 'bg-blue-200 text-blue-600'} sm:space-x-3 text-gray-500 cursor-pointer hover:bg-blue-200 hover:text-blue-600 transition-all`}>
            <Icon />
            <p className='font-semibold hidden md:flex'>{text}</p>
        </Link>
    )
}

export default AdminSidebarCard
