import React from 'react'

const SocialMediaIcon = ({link , icon }) => {
    return (
        <a href={link} target='_blank' className="mr-4 relative text-white hover:text-teal-300">
            <img src={icon} alt="Twitter" className="w-6 fill-current" />
            <span className="absolute bottom-0 left-1/2 bg-gray-800 py-1 px-2 text-xs font-semibold opacity-0 pointer-events-none transform -translate-x-1/2 -translate-y-full transition-all duration-200">Twitter</span>
        </a>
    )
}

export default SocialMediaIcon