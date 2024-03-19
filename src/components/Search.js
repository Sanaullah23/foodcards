import React, { useEffect } from 'react'
import { useState } from 'react'
import Fooddata from './FoodData'
import Cards from './Cards'
// import image
import sitelogo from '../assets/food.png'

const Search = () => {
    //create state 
    const [foodData, setFoodData]=useState(Fooddata)

    // create state for searchfilter
    const [copydata, setCopyData]=useState([]);

    console.log(copydata)

    const changeData=(e)=>{
      let getValue = e.toLowerCase();
      if(getValue == ""){
        setCopyData(foodData)
      }else{
        let storeData = copydata.filter((ele, k)=>{
          return ele.rname.toLowerCase().match(getValue) 
        });
        console.log(storeData)
        setCopyData(storeData)
      }

      
      
      
    }

    useEffect(()=>{
      setTimeout(()=>{
        setCopyData(Fooddata)
      },1000)
      
    }, [])

   
  return (
    <>
      <div className='container flex justify-between items-center py-6 px-8'>
         <img src={sitelogo} alt='' style={{width:"8rem", position:"relative", cursor:"pointer"}}/>
         <h1 className='text-3xl  font-bold text-orange-400'>Search Filter App</h1>
      </div>

      <div className='flex justify-center items-center mt-4'>
        <input type='text' placeholder='searc food' className='px-4 py-[11px] border-[1.5px]
        rounded-l-md focus:outline-none focus:shadow-lg focus:shadow-blue-200'  style={{width:"20rem"}}
        onChange={(e)=>changeData(e.target.value)}/>
        <button  className='px-8 py-[9.5px] bg-orange-400 rounded-r-md text-[1.2rem] text-white'>search</button>
      </div>

      <section className=' container mt-8'>
        <h2 className='text-2xl  pl-20' style={{fontWeight:500}}>Resturant Hyderabad is open NOW</h2>
        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 ml-[4rem] mt-3'>
            {copydata && copydata.length ? <Cards data={copydata} /> : "Empty"}
        </div>

      </section>
    </>
  )
}

export default Search