import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from './Button'
import { ToastContainer, toast } from 'react-toastify';

const Card = ({image, name , price}) => {

    const addToCart = ()=>{
        toast('Product is added', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
    }
    return (
        <div className='bg-zinc-100 flex flex-col rounded-xl justify-between p-2 md:mt-10 mt-5  '>

            {/* card icons */}
            <div className='flex justify-between'>
                <span className='cursor-pointer m-2'>
                    <FaHeart className='text-zinc-400 hover:text-black'/>
                </span>
                <button className='cursor-pointer m-2'>
                    <FaPlus className='text-zinc-400 hover:text-black' />
                </button>
            </div>
            {/* card img */}
            <div>
                <img src={image} alt="" />
            </div>

            {/* card contant */}
            <div className='flex flex-col p-2 items-center'>
                <h3 className='text-2xl text-zinc-700 font-semibold'>{name}</h3>
                <p className='text-2xl text-zinc-700 font-bold'>${price.toFixed(2)}</p>
                <div className='mt-3' onClick={addToCart}>
                    <Button  contant='Shop' />
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Card