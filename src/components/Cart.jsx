import React ,{useState} from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './itemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
    const [activeCart, setActiveCart] = useState(true);
    const cartItems = useSelector((state)=>state.cart.cart);
  return (
    <>
        <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`} >
        <div className="flex justify-between items-center my-3">
             <span className="text-xl font-bold text-gray-800" > my order </span>
             <IoMdClose 
              onClick={() => setActiveCart(!activeCart)}
             className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
    
             </div>  

             
             {cartItems.length >0 ?  cartItems.map((food)=>{
                return (
                <ItemCard
                 key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
                />
            );
        }): <h2 className='text-xl text-center font-bold text-gray-800'> Your cart is Empty</h2>  }

             


             <div  className="absolute bottom-0 ">
            <h3 className="font-semibold text-gray-800"  >Items:</h3>
            <h3 className="font-semibold text-gray-800" >Total amount:</h3>
            <hr />
            <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5" >checkout</button>
        
            </div>
        </div>

        <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 
        `}
        />


    </>
  )
}

export default Cart