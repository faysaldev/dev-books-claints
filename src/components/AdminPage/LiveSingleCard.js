import React from 'react'

function LiveSingleCard({Icon,text,number,bg,color}) {
    return (
        <div className='bg-white px-10 py-6 rounded-lg shadow hover:shadow-md border flex items-center space-x-5'>
            <div className={`w-16 h-16 ${bg} ${color} rounded-full flex items-center justify-center`}><Icon /></div>

            <div className='space-y-2'>
                <h1 className='text-xl font-bold'>{number}</h1>
                <p className='text-md text-gray-500'>{text}</p>
            </div>
        </div>
    )
}

export default LiveSingleCard
