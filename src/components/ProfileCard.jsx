import React from 'react'
import profile from '../assets/profile.jpeg'
import icon2 from '../assets/icon2.png'
import SocialMediaIcon from './SocialMediaIcon'

const ProfileCard = () => {
    return (
        <div>

            <div class="card">
                <div className="overflow-hidden rounded-full w-32 h-32 mx-auto border-4 border-teal-500">
                    <img src={profile} alt="Profile Picture" className="object-cover object-[-10px] w-full h-full" />
                </div>
                <div className='text-center'>
                    <p className="mt-4 text-black font-bold text-2xl">Mohammad Uzaif</p>
                    <p className="text-gray-800 font-semibold text-lg">Tailor</p>
                </div>


                <div className=" w-full mx-5 h-[2px] bg-gray-400 mt-7"></div>
                <div className="mt-4 flex justify-center">
                    <SocialMediaIcon link="#" icon={icon2} />
                    <SocialMediaIcon link="#" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard