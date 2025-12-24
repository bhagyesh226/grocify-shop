import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import AddToCart from '../Halper/AddToCart';

const Navbar = () => {
    const [showMenu, setMenu] = useState(false)
    const [showCart, setCart] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(false);
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenu(!showMenu)
    }

    const toggleCart = () => {
        setCart(!showCart)
    }

    const handleSearch = () => {
        if (searchText.trim() === "") return;
         setMenu(!showCart)
        navigate(`/Searchbar?query=${searchText}`);
        setSearchText("");
       
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY > 50);

        }
        window.addEventListener('scroll', handleScroll);
    })
    return (
        <header className={`fixed  pt-2 right-0 top-0 left-0 z-50 ${scrollPosition ? 'shadow-md  h-[14vh] bg-orange-300 transition-all duration-500' : 'h-[14vh] transition-all duration-500'}`}>
            <nav className='max-w-[1400px]  mx-auto  px-10 md:h-[14vh] h-[10vh] flex justify-between items-center '>

                {/* logo */}

                <Link to='/'  className='font-bold text-3xl'>
                    gr<samp className='text-orange-400'>O</samp>cify
                </Link>

                {/* Desktop menu */}

                <ul className='md:flex items-center font-semibold tracking-wider hidden  gap-x-8'>
                    <li>
                        <Link to="/" className=' text-amber-600 hover:text-amber-500' >Home</Link>
                    </li>
                    <li>
                        <Link to="/AboutUs" className=' text-zinc-600 hover:text-amber-500'>About Us</Link>
                    </li>
                    <li>
                        <Link to="/Process2" className=' text-zinc-600 hover:text-amber-500'>Process</Link>
                    </li>
                    <li>
                        <a href="#" className=' text-zinc-600 hover:text-amber-500'>Contact Us</a>
                    </li>
                </ul>

                {/* nav Action */}

                <div className='flex justify-between items-center gap-x-6 '>
                    <div className='md:flex border-2   border-orange-400 rounded-4xl hidden items-center '>
                        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search' className='  px-2 py-1 outline-none' />
                        <button onClick={handleSearch} className='  px-3 py-2 m-0.5 ml-2 h-10 w-10 rounded-full text-xl justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 cursor-pointer '>
                            <FaSearch />
                        </button>
                    </div>

                    <a href="#" className='text-zinc-800 text-2xl'>
                        <FaHeart />
                    </a>
                    <button onClick={toggleCart} className='text-zinc-800 text-2xl' >
                        <IoMdCart />
                    </button>

                    {/* Hamburger */}
                    <button  className='text-zinc-800 text-2xl md:hidden ' onClick={toggleMenu}>
                        {showMenu ? <LuMenu /> : <IoClose />}
                    </button>
                </div>

                {/* mobile menu */}
                <ul className={`flex flex-col p-10 items-center gap-x-3 gap-y-7 font-semibold  tracking-wider md:hidden  absolute bg-orange-500/30 backdrop-blur-xl rounded-xl top-30 transform -translate-x-1/2 transition-all duration-700  ${showMenu ? 'hidden' : 'left-1/2'} `}>

                    <li>
                        <Link to="/AboutUs" onClick={toggleMenu} className=' text-zinc-600 hover:text-amber-500'>About Us</Link>
                    </li>
                    <li>
                        <Link to="/Process2" onClick={toggleMenu} className=' text-zinc-600 hover:text-amber-500'>Process</Link>
                    </li>
                    <li>
                        <a href="#" className=' text-zinc-600 hover:text-amber-500'>Contact Us</a>
                    </li>
                    <li className='flex border-2   border-zinc-500 rounded-4xl md:hidden items-center '>
                        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search' className='  px-2 py-1 outline-none' />
                        <button onClick={handleSearch} className='  px-3 py-2 m-0.5 ml-2 h-10 w-10 rounded-full text-xl justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 cursor-pointer '>
                            <FaSearch />
                        </button>
                    </li>
                </ul>

                {/* cart item  */}
                <div className={`flex flex-col p-10 items-center gap-x-3 gap-y-7 font-semibold  tracking-wider  absolute bg-orange-500/30 backdrop-blur-xl rounded-xl md:top-20 sm:top-20 top-20 transform -translate-x-1/2 transition-all duration-700  ${showCart ? 'left-1/2' : 'hidden'} `}>
                    <AddToCart />
                </div>

            </nav>
        </header>
    )
}

export default Navbar