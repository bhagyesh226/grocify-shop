import React from 'react'
import img from '../../assets/basket-full-vegetables.png'
import {
  PiPlant,
  PiFactory,
  PiShieldCheck,
  PiWarehouse,
  PiTruck
} from 'react-icons/pi'

const processSteps = [
  {
    id: 1,
    title: 'Fresh Sourcing',
    icon: <PiPlant />,
    desc:
      'We source fresh vegetables and groceries directly from trusted farmers and verified suppliers to ensure freshness and quality.'
  },
  {
    id: 2,
    title: 'Smart Processing',
    icon: <PiFactory />,
    desc:
      'All products are cleaned, sorted, and packed using modern processing techniques that preserve nutrition and hygiene.'
  },
  {
    id: 3,
    title: 'Quality Assurance',
    icon: <PiShieldCheck />,
    desc:
      'Every item undergoes strict quality checks to meet food safety standards before moving to the next stage.'
  },
  {
    id: 4,
    title: 'Secure Storage',
    icon: <PiWarehouse />,
    desc:
      'Groceries are stored in temperature-controlled warehouses to maintain freshness until dispatch.'
  },
  {
    id: 5,
    title: 'Fast Delivery',
    icon: <PiTruck />,
    desc:
      'Our logistics team ensures timely and safe doorstep delivery with real-time tracking support.'
  }
]

const Process2 = () => {
  return (
    <div className="md:mt-30 mt-22">
      <div
        className="relative bg-cover bg-center bg-no-repeat rounded-xl min-h-screen bg-fixed"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto md:px-6 md:pt-24">
          <div className="md:bg-white/70 backdrop-blur-md rounded-4xl p-10 space-y-10">

            <h2 className="text-3xl md:text-4xl font-bold text-center text-white md:text-zinc-800">
              Our Grocery Process
            </h2>

            <div className="grid md:grid-cols-2 p-0 md:gap-8 gap-2">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="md:flex flex-col gap-5 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition"
                >
                  <div className="flex items-center justify-center md:w-20 md:h-20 w-10 h-10 rounded-full bg-orange-500 text-white text-3xl">
                    {step.icon}
                  </div>

                  <div>
                    <h4 className="md:text-xl text-sm font-bold text-zinc-800">
                      {step.title}
                    </h4>
                    <p className="text-zinc-600 md:text-xl text-sm text-justify md:align-text-top leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Force scroll */}
          <div className="h-[90vh]" />
        </div>
      </div>
    </div>
  )
}

export default Process2
