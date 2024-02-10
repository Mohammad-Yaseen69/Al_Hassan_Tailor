import { Link } from 'react-router-dom';
import links from '../../content/NavLinks';

const NavLinks = () => {

    return (
        <div className='flex max-sm:flex-col max-sm:items-center gap-11 text-white'>
            {links.map((link, index) => (
                <Link key={index} to={link.url}>
                    <h1
                        id={`tx${index + 1}`}
                        className='font-SpaceGrotesk font-bold max-ss:text-[5vw] max-md:text-[2.5vw] 
                        text-[1.7vw] cursor-pointer transition-all duration-500 border-b-4
                        border-transparent hover:border-red-400'
                    >
                        {link.name}
                    </h1>
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;
