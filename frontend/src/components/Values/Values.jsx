import React from 'react'
import Heading from '../Halper/Heading'
import { FaHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";
import basketimg from '../../assets/basket-full-vegetables.png'

const Values = () => {

    const leftValues = values.slice(0, 2).map(item => {
        return(
            <div className='flex  md:flex-row-reverse flex-col items-center  gap-4 ' key={item.id}>
                <div >
                    <span className='flex  text-white text-3xl bg-gradient-to-b from-orange-300 to-orange-600 w-15 h-15 justify-center items-center rounded-full  '>{item.icon}</span>
                </div>
                <div className='md:text-right text-center '>
                    <h2 className='text-zinc-800 text-3xl font-bold'>{item.title}</h2>
                    <p className='text-zinc-700 '>{item.para}</p>
                </div>
            </div>
        )
    })
    const rightValues = values.slice(2,4).map(item => {
        return(
            <div className='flex md:flex-row flex-col items-center  gap-4' key={item.id}>
                <div >
                    <span className='flex  text-white text-3xl bg-gradient-to-b from-orange-300 to-orange-600 w-15 h-15 justify-center items-center rounded-full '>{item.icon}</span>
                </div>
                <div className='md:text-left text-center '>
                    <h2 className='text-zinc-800 text-3xl font-bold'>{item.title}</h2>
                    <p className='text-zinc-700 '>{item.para}</p>
                </div>
            </div>
        )
    })
  return (
    <div className='max-w-[1400px] mx-auto px-10  '>
        <Heading heading='Our' heading2=' Values' />
        
        <div className='flex md:flex-row flex-col mt-15 gap-7'>
            {/* left side 4 values */}
            <div className="flex min-h-100 flex-col justify-between " >
                {leftValues}
            </div>

            {/* center image */}
            <div className='md:flex mx-auto w-1/2'>
                <img src={basketimg} alt="" />
            </div>

            {/* right side 4 values */}
            <div className="flex min-h-100 flex-col justify-between ">
                {rightValues}
            </div>

        </div>
      </div>
  )
}

export default Values


const values = [
    {
        id: 1,
        title: "Trust",
        para : 'It is a long established fact that a reader will be distracted by the readable.',
        icon : <FaHeart/>
    },
    {
        id: 2,
        title: "Always Fresh",
        para : 'It is a long established fact that a reader will be distracted by the readable.',
        icon : <FaLeaf/>
    },
    {
        id: 3,
        title: "Food Safety",
        para : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon : <FaShieldAlt/>
    },
    {
        id: 4,
        title: "100% Organic",
        para : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon : <FaSeedling/>
    }
    ]