import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center shadow-md px-4 h-14'>
            <div className='font-bold'> TODO APP</div>
            <div className='flex flex-row gap-4'>
                <Link to="/"><div className="bg-yellow-200 rounded-lg hover:bg-green-300 cursor-pointer p-2"> Home</div></Link>
                <Link to="/mytasks"><div className="bg-yellow-200 rounded-lg hover:bg-green-300 cursor-pointer p-2"> My-Tasks</div></Link>   
            </div>
        </div>
    </div>
  )
}

export default Navbar