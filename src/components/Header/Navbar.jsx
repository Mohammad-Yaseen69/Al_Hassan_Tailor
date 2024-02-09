import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.jpg'
import Navlinks from './NavLinks';

const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(false);
    const [bgColor, setBgColor] = useState('transparent');
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            // console.log('Current scroll position:', currentScrollPos);
            // console.log('Previous scroll position:', prevScrollPos);

            const isScrollingDown = currentScrollPos > prevScrollPos;

            if (isScrollingDown && currentScrollPos > 20) {
                console.log('change');
                setBgColor('#000'); // Set background color to black
            } else {
                console.log('noe');
                setBgColor('transparent'); // Set background color to transparent
            }
            setPrevScrollPos(currentScrollPos);
        };

        console.log('Adding event listener');
        window.addEventListener('scroll', handleScroll);
        return () => {
            console.log('Removing event listener');
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div id='logo' style={{ backgroundColor: bgColor }} className={`w-full transition-all duration-500 z-50 fixed top-0 left-0 `}>
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
