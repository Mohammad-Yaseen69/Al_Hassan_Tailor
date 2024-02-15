import { Link, NavLink } from 'react-router-dom';
import links from '../../content/NavLinks';

const NavLinks = ({className}) => {

    return (
        <div className='flex max-sm:flex-col max-sm:items-center gap-11 text-white'>
            {links.map((link, index) => (
                <NavLink key={index}
                    to={link.url}>
                    <h1
                        id={`tx${index + 1}`}
                        className={`menu__link relative font-SpaceGrotesk font-bold ${className ? className : 'max-ss:text-[5vw] max-md:text-[2.5vw] text-[1.7vw]'}  cursor-pointer transition-all duration-500 border-b-4
                        border-transparent`}
                    >
                        {link.name}
                    </h1>
                </NavLink>
            ))}
        </div>
    );
};

export default NavLinks;
