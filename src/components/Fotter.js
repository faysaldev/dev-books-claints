import React from 'react'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


function Fotter() {
    return (
        <footer className='pt-16 pb-6'>

        	<hr className='pb-6' />

            <div className='flex items-center justify-center space-x-3 font-semibold text-md'>
                Made with <VolunteerActivismIcon className='ml-3 mr-3 text-red-800' />  by  <a target="_blank" className='text-blue-700 font-bold' href="https://www.facebook.com/faysaldev">Faysal Mridha</a>
            </div>
        </footer>
    )
}

export default Fotter
