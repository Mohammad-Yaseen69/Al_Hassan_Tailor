import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.jpg'
import Navlinks from './NavLinks';

const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false);



    return (
        <div id='logo' className={`w-full transition-all duration-500 z-50`}>
            <div className='relative'>
                <div className='w-full items-center  flex justify-between max-ss:ppx-0 py-3 px-6'>
                    <img src={logo} alt="" className='w-[100px] rounded-full h-[100px] object-[0px 100px] object-cover' />

                    <div className='max-sm:hidden block'>
                        <Navlinks />
                    </div>

                    <div className='max-sm:block z-[100]  hidden'>
                        <label className="menuButton cursor-pointer" htmlFor="check">
                            <input type="checkbox"
                                id="check"
                                value={menuToggle}
                                className='cursor-pointer'
                                onClick={(e) => setMenuToggle(prev => !prev)}
                            />
                            <span className="top"></span>
                            <span className="mid"></span>
                            <span className="bot"></span>
                        </label>
                    </div>

                    <div className={`max-sm:flex z-50 ${menuToggle ? 'left-0' : '-left-[1000px]'} bg-[#1C3144] transition-all duration-300 top-0 h-screen justify-center w-full  items-center  absolute hidden`}>
                        <Navlinks />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
