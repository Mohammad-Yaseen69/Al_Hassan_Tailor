import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({ title, img, text, id }) => {
    const navigate = useNavigate()
    return (
        <div id={id} class="xl:w-1/3 md:w-1/2 cursor-pointer p-4">
            <div onClick={() => {
                navigate(`/category/${title.toLowerCase()}`)
            }} class="border w-full flex justify-between px-11 items-center  card2 p-3 rounded-lg">
                <div class="w-32 h-32 flex-shrink-0 overflow-hidden inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <img src={img} className='w-full h-full object-cover' alt="" />
                </div>
                <div>
                    <h2 class="text-2xl text-gray-900 font-bold font-Montserrat title-font mb-2">{title}</h2>
                    <p class="leading-relaxed text-base">Fingerstache fle co, subway tile poke farm.</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard