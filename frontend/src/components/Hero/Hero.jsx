import React from 'react'
import grocery from '../../assets/grocery.png'
import Button from '../Halper/Button'

const Hero = () => {
    return (
        <div className='max-w-[1400px] min-h-screen px-10  flex md:flex-row flex-col  items-center md:pt-25 pt-35'>
            {/* Hero content */}
            <div className='flex-1'>
                <samp className='bg-orange-100 text-orange-500 text-lg px-5 py-2 mt-2 mb-3 rounded-full'>Exprot best quality..</samp>
                <h1 className='md:text-5xl text-3xl mt-2 mb-3 font-bold'>
                    Tasty ogganic <samp className='text-orange-500'> <br />Fruits</samp> & <samp className='text-orange-500'>Veggies</samp><br /> in your city
                </h1>
                <p className='text-zinc-600 max-w-[550px] mt-2 mb-10 text-lg'>
                    Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                </p>
                <Button contant='Shop ' />
            </div>

            {/* hero img */}
            <div className='flex-1 animate-bounce-3  '>
                <img src={grocery} alt="hero img" />
            </div>

            <style>
                {`
                @keyframes bounce {
                    0%, 100% {
                    transform: translateY(0);
                    }
                    50% {
                    transform: translateY(-25px);
                    }
                }

                .animate-bounce-3 {
                    animation: bounce 0.8s ease-in-out 3;
                }
                `}
            </style>


        </div>
    )
}

export default Hero