import links from '../../content/NavLinks';

const NavLinks = () => {
    
    return (
        <div  className='flex max-sm:flex-col gap-11 text-white'>
            {links.map((link, index) => (
                <h1
                    id={`tx${index + 1}`}
                    className='font-SpaceGrotesk font-bold max-md:text-[2.5vw] text-[1.7vw] cursor-pointer transition-all duration-300 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300'
                    key={index}
                   
                >
                    {link.name}
                </h1>
            ))}
        </div>
    );
};

export default NavLinks;
