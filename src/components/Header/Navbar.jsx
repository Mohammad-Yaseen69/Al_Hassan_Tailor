import React, { useRef, useLayoutEffect } from 'react';
import logo from '../../assets/logo.jpg'
import Navlinks from './NavLinks';
import gsap from 'gsap';

const Navbar = () => {
    const ref = useRef(null);

    return (
        <div id='logo' ref={ref} className='w-full relative top-0 left-0 py-4 px-7'>
            <div className='w-full items-center flex justify-between px-6'>
                <img src={logo} alt="" className='w-[100px] rounded-full h-[100px] object-[0px 100px] object-cover' />
                <Navlinks />
            </div>
        </div>
    );
}

export default Navbar;
