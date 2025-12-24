import React from 'react'
import Heading from '../Halper/Heading'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { FaTruckMoving } from "react-icons/fa";

const Process = () => {
    const stepItems = steps.map(item => {
        return (
            <div key={item.id} className={`flex md:flex-col flex-row flex-1 ${item.id % 2=== 0 ? 'md:-mt-50' : ''} `}>
                <span className=' flex w-18 h-18 mx-auto text-6xl outline-[3px] rounded-full justify-center items-center outline-dotted '>{item.Number}</span>
                <div className='flex flex-col md:flex-row items-center gap-x-5 mt-5'>
                    <span className='flex bg-gradient-to-b from-orange-400 to-orange-500 text-white text-2xl w-15 h-15 rounded-full  justify-center items-center'>{item.icon}</span>
                    <div className='flex-1 '>
                        <h4 className='text-zinc-800 md:text-2xl font-bold'>{item.title}</h4>
                        <p className='text-zinc-700 '>{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-15'>
                <Heading heading='Our' heading2=' Process' />

                {/* steps */}
                <div className='flex flex-col md:flex-row gap-y-10 justify-center items-center mt-10 md:pt-15  '>
                    {stepItems}
                </div>
            </div>
        </section>
    )
}

export default Process

const steps = [
    {
        id: 1,
        Number: <TbCircleNumber1 />,
        title: 'Sourcing',
        para: 'Procuring quality raw materials from trusted and verified suppliers.',
        icon: <PiPlant />
    },
    {
        id: 2,
        Number: <TbCircleNumber2 />,
        title: 'Manufacturing',
        para: 'Producing finished goods using efficient and modern manufacturing methods.',
        icon: <PiFactory />
    },
    {
        id: 3,
        Number: <TbCircleNumber3 />,
        title: 'Quality Control',
        para: 'Ensuring products meet strict quality standards and specifications.',
        icon: <SlBadge />
    },
    {
        id: 4,
        Number: <TbCircleNumber4 />,
        title: 'Logistics',
        para: 'Handling packaging, storage, and timely delivery of products.',
        icon: <FaTruckMoving />
    }
]