import React from 'react'
import Foodcard from './Foodcard'
import FoodData from '../data/FoodData'

const Fooditem = () => {
  return (
    <div className='flex flex-wrap justify-center lg:justify-start mx-2 my-10' >   
        {
            FoodData.map((food) =>{
                return <Foodcard key ={food.id}
                 id={food.id}
                  name={food.name} 
                  price={food.price}
                  desc={food.desc}
                  img={food.img}       
                  rating ={food.rating}       
                  />
            })}
    </div>
  )
}

export default Fooditem