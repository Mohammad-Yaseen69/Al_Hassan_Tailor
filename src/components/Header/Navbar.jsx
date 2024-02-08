import { useState } from 'react';
import logo from '../../assets/logo.jpg'
import Navlinks from './NavLinks';

const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false);

  
    return (
        <div id='logo' className='w-full relative top-0 left-0 py-4 px-7'>
            <div className='w-full items-center flex justify-between px-6'>
                <img src={logo} alt="" className='w-[100px] rounded-full h-[100px] object-[0px 100px] object-cover' />

                <div className='max-sm:hidden block'>
                    <Navlinks />
                </div>

                <div className='max-sm:block  hidden'>
                    <label className="menuButton" htmlFor="check">
                        <input type="checkbox"
                            id="check"
                            value={menuToggle}
                            onClick={(e) => setMenuToggle(prev => !prev)}
                        />
                        <span className="top"></span>
                        <span className="mid"></span>
                        <span className="bot"></span>
                    </label>
                </div>

                <div className={`max-sm:flex ${menuToggle ? 'left-0' : '-left-[1000px]'} bg-[#1C3144] transition-all duration-300 top-0 h-screen justify-center w-[40%]  items-center  absolute hidden`}>
                    <Navlinks />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
