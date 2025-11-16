import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='bg-zinc-100 py-20'>
            <div className='flex flex-wrap gap-y-10 max-w-[1400px] mx-auto px-10'>
                <div className='flex-1 basis-[300px]'>
                    <a href="#" className='font-bold text-3xl'>
                        gr<samp className='text-orange-400   '>O</samp>cify
                    </a>

                    <p className='text-zinc-600 mt-6 max-w-[350px]'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <p className='text-zinc-600'> 2025 &copy; All Rights Reserved</p>
                </div>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>company</h5>
                        </li>
                        <li className='mt-5'>
                            <a href="" className='text-zinc-600 mt-6 hover:text-orange-500'>About us</a>
                        </li>
                        <li className='mt-5'>
                            <a href="" className='text-zinc-600 mt-6 hover:text-orange-500'>FAQ</a>
                        </li>
                </ul>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                        </li>
                        <li className='mt-5'>
                            <a href="" className='text-zinc-600 mt-6 hover:text-orange-500'>Support Center</a>
                        </li>
                        <li className='mt-5'>
                            <a href="" className='text-zinc-600 mt-6 hover:text-orange-500'>Feedback</a>
                        </li>
                        <li className='mt-5'>
                            <a href="" className='text-zinc-600 mt-6 hover:text-orange-500'>Contect Us</a>
                        </li>
                </ul>

                <div>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
                    <p className='text-zinc-600 mt-6'>questions or feedback ? <br /> we'd love hear from you.</p>
                    <div className='bg-white flex p-1 mt-3 rounded-lg'>
                        <input className='h-[5vh] p-4 flex-1 focus:outline-none' type="email" name='email ' id="email" placeholder='enter email' autoComplete='off' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 cursor-pointer hover:to-orange-700 rounded-lg text-2xl text-white'>
                    <IoIosArrowForward/>
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer