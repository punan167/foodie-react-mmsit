import React from 'react'
import {IoMdRestaurant} from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to={'/'}>
        <div className='flex items-center gap-2 my-8'>
            <IoMdRestaurant className=' text-3xl text-pink-500'/>
            <p className='text-xl font-semibold text-gray-500'>Foodie</p>
        </div>
    </Link>
  )
}

export default Navbar