import React from 'react'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className=' w-64 border-2 flex justify-center items-center flex-col p-5 rounded-xl gap-5 relative h-[400px] hover:shadow-2xl transform hover:scale-105 transition delay-50'> 
        <img src={meal.strMealThumb} width="200px" className=' rounded-xl' alt="" />
        <h3>{meal.strMeal}</h3>
        
        <button className= ' text-white bg-blue-500 px-6 py-1 rounded-xl absolute bottom-3'>
        <Link to={`/detail/${meal.idMeal}`}> <AiFillEye className=' text-2xl'/> </Link></button>
       
    </div>
  )
}

export default Card