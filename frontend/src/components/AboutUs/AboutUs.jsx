import React from 'react'
import AboutUs1 from '../../assets/AboutUs2.png'
import city1 from '../../assets/city1.png'
import city2 from '../../assets/city2.png'
import city3 from '../../assets/city3.png'
import city4 from '../../assets/city4.png'
import A1 from '../../assets/A1.jpeg'
import A2 from '../../assets/A2.jpeg'



function AboutUs() {
  return (
    <div className=" pt-18 md:pt-35">

      {/* HERO SECTION */}
      <div
        className="bg-cover bg-no-repeat bg-right md:h-screen h-[250px] rounded-xl opacity-95"
        style={{ backgroundImage: `url(${AboutUs1})` }}
      />

      <div className='max-w-[1400px] mx-auto'>
        {/* SECTION 1 — HOW WE STARTED */}
      <div className="flex flex-col md:flex-row items-center gap-10 py-16 px-6">
        <div className="md:w-1/2">
          <h2 className="md:text-4xl text-2xl font-extrabold mb-4">How We Started</h2>
          <p className="text-zinc-600 leading-relaxed md:text-2xl text-xl">
            We started this business with a simple idea — to provide quality
            service with honesty and dedication. Over the years, our passion
            and customer trust helped us grow into a strong and reliable brand.
          </p>
        </div>

        <div className="w-[50%] ">
          <img
            src={A1}
            alt="How we started"
            className="rounded-xl w-full shadow-xl shadow-zinc-600"
          />
        </div>
      </div>
<hr />
      {/* SECTION 2 — OUR MOTIVE */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 py-16 px-6  rounded-xl">
        <div className="md:w-1/2">
          <h2 className="md:text-4xl text-2xl font-extrabold  mb-4">Our Motive</h2>
          <p className="text-zinc-600 leading-relaxed md:text-2xl text-xl">
            Our motive is to make our services accessible, affordable, and
            reliable for everyone. We focus on continuous improvement and
            customer satisfaction above everything else.
          </p>
        </div>

        <div className="w-[50%]">
          <img
            src={A2}
            alt="Our motive"
            className="rounded-xl w-full shadow-xl shadow-zinc-600"
          />
        </div>
      </div>

      {/* SECTION 3 — OUR CITIES */}
      <div className="py-20 px-6">
        <h2 className="md:text-7xl text-4xl font-bold text-center italic text-shadow-amber-400 mb-10">
          We Serve Across Cities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 md:gap-8 gap-2">
          {data.map((city) => (
            <div
              key={city.id}
              className="flex items-center p-4 bg-zinc-200 rounded-xl gap-3 hover:scale-105 hover:shadow-xl transition"
            >
              <div className='md:w-28 md:h-28 w-10 h-10 rounded-full bg-amber-100 justify-center items-center '>
                <img
                src={city.img}
                alt={city.img}
                className="p-2 h-fit w-fit "
              />
              </div>
              <div>
                <h3 className="md:text-2xl text-xl font-semibold text-zinc-600">{city.cityn}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

    </div>
  )
}

export default AboutUs


const data =[
  {
    id:1,
    cityn :"Delhi",
    img : city1
  },
  {
    id:2,
    cityn :"Mumbai",
    img : city2
  },
  {
    id:3,
    cityn :"Ahmedabad",
    img : city3
  },{
    id:5,
    cityn :"Bangalore",
    img : city4
  },
]
