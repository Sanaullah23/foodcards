import React from 'react'
import { useState } from 'react'
import Fooddata from './FoodData'
// import image
import sitelogo from '../assets/food.png'

const Search = () => {
    //create state 
    const [foodData, setFoodData]=useState(Fooddata)

   
  return (
    <>
      <div className='container flex justify-between items-center py-6 px-8'>
         <img src={sitelogo} alt='' style={{width:"8rem", position:"relative", cursor:"pointer"}}/>
         <h1 className='text-3xl  font-bold text-orange-400'>Search Filter App</h1>
      </div>

      <div className='flex justify-center items-center mt-4'>
        <input type='text' placeholder='searc food' className='px-4 py-[11px] border-[1.5px]
        rounded-l-md focus:outline-none'  style={{width:"20rem"}}/>
        <button  className='px-8 py-[9.5px] bg-orange-400 rounded-r-md text-[1.2rem] text-white'>search</button>
      </div>
    </>
  )
}

export default Search