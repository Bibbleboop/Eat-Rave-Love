import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

    return (
        <div className='w-screen h-[80px] z-10 bg-cyan-900 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl text-slate-200'>EAT RAVE LOVE.</h1>
                    <ul className='hidden md:flex text-slate-200'>
                        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                        <li><Link to="footer" smooth={true} offset={-50} duration={500}>Footer</Link></li>
                        <li><Link to="contactUs" smooth={true} offset={-100} duration={500}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='px-8 py-3'>Favourites</button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="footer" smooth={true} offset={-100} duration={500}>Footer</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="contactUs" smooth={true} offset={-50} duration={500}>Contact Us</Link></li>
                <div className='flex flex-col my-4'>
                    <button className='px-8 py-3'>Favourites</button>
                </div>
            </ul>
        </div>
    );
};


export default Navbar 