import React from 'react'
import Heading from '../Halper/Heading'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import costomer1 from '../../assets/customer1.jpg'
import costomer2 from '../../assets/customer2.jpg'
import costomer3 from '../../assets/customer3.jpg'
import costomer4 from '../../assets/customer4.jpg'
import costomer5 from '../../assets/customer5.jpg'
import { FaStar } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';

const Test = () => {
    return (
        <section>
            <div className='[max-w-1400px] px-10 mb-20 mx-auto'>
                <Heading heading='Customers' heading2=' Saying' />

                <div className='flex justify-end gap-x-3 py-5'>
                    <button className=' custom-perv text-2xl cursor-pointer text-shadow-zinc-800 cr rounded-lg w-11 h-11 bg-zinc-100 justify-center hover:bg-gradient-to-b from-orange-400 to-orange-500 hover:text-white items-center flex '>
                        <IoIosArrowBack />
                    </button>
                    <button className=' custom-next text-2xl cursor-pointer text-shadow-zinc-800 cr rounded-lg w-11 h-11 bg-zinc-100 justify-center hover:bg-gradient-to-b from-orange-400 to-orange-500 hover:text-white items-center flex '>
                        <IoIosArrowForward />
                    </button>


                </div>

                <Swiper navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-perv'
                }} loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 }
                    }}
                    modules={[Navigation]} className="mySwiper">
                    {
                        review.map(item => {
                            return (
                                <SwiperSlide className='bg-zinc-100  rounded-lg p-8'>
                                    <div className='flex gap-5 items-center'>
                                        {/* proflie  */}
                                        <div className='w-16 h-16 rounded-full flex outline-2 outline-orange-500 justify-center  items-center outline-offset-4'>
                                            <img src={item.Image} className='rounded-full ' alt="" />

                                        </div>
                                        {/* data  */}
                                        <div>
                                            <h5 className='text-xl font-bold'>{item.name}</h5>
                                            <p className='text-zinc-600'>{item.profession}</p>
                                            <span className='flex text-yellow-400 '>
                                                {
                                                    Array.from({ length: item.rating }, (_, index) => (
                                                        <FaStar key={index}  />
                                                    ))
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <div className='mt-5 min-h-[15vh]'>
                                        <p className='text-zinc-600'>{item.para}</p>
                                    </div>

                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>


            </div>
        </section>
    )
}

export default Test

const review = [
    {
        id: 1,
        name: 'Emily Johnson',
        profession: 'Food Blogger',
        Image: costomer1,
        rating: '3',
        para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!'
    },
    {
        id: 2,
        name: 'David Smith',
        profession: 'Chef',
        Image: costomer2,
        rating: '5',
        para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!'
    },
    {
        id: 3,
        name: 'Alya Zahra',
        profession: 'Model',
        Image: costomer3,
        rating: '3',
        para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable."
    },
    {
        id: 4,
        name: 'Carlos Mendes',
        profession: 'Fitness Coach',
        Image: costomer4,
        rating: '4',
        para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!'
    },
    {
        id: 5,
        name: 'Natcha Phongchai',
        profession: 'Nutritionist',
        Image: costomer5,
        rating: '3',
        para: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.'
    }
]