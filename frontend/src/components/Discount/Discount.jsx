import React from 'react'
import Button from '../Halper/Button'
import fruite from '../../assets/fresh-fruits.png'
const Discount = () => {
    return (
        <section className=''>
            <div className=' md:bg-zinc-200 max-w-[1400px] flex flex-col md:flex-row mx-auto bg-contain  bg-no-repeat bg-right  py-10 px-10' style={{ backgroundImage: `url(${fruite})`,  }}>
                <span className='md:text-8xl text-5xl text-orange-500 transform md:-rotate-90 rotate-0 h-fit md:self-center font-bold'>20%</span>
                <div className='max-w-[700px]'>
                    <h3 className='text-5xl text-zinc-800 font-semibold '>First Order Discount!</h3>
                    <p className='text-zinc-700 my-5'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                    <Button contant='Get a Discount' />
                </div>
            </div>
        </section>
    )
}

export default Discount