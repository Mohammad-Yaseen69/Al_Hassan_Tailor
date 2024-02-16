import React, { useEffect } from 'react'
import CategoryCard from './CategoryCard'
import Category1 from '../../assets/Category1.png'
import Category2 from '../../assets/Category2.png'
import Category3 from '../../assets/Category3.png'
import Category4 from '../../assets/Category4.png'
import gsap from 'gsap'
import { useSelector } from 'react-redux'

const Category = () => {
    const { completed } = useSelector(state => state.Animation)

    useEffect(() => {
        if (completed) {
            gsap.from(["#box1", "#box2", "#box3", "#box4"], {
                opacity: 0,
                duration: 1,
                stagger: 0.3,
            })
        }
    }, [completed])

    return (
        <section class="text-gray-600 w-full  flex h-auto justify-center items-center body-font">
            <div class="container  flex flex-col gap-6 px-5 my-32  mx-auto">
                <div class="flex flex-wrap w-full  flex-col items-center text-center">
                    <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">
                        Categories
                    </h1>
                </div>
                <div class="flex flex-wrap items-center justify-center -m-4">
                    <CategoryCard id="box1" img={Category1} title="Shirts" content="Explore a variety of stylish and comfortable shirts tailored for you." />
                    <CategoryCard id="box2" img={Category2} title="Kurta" content="Discover traditional and trendy kurtas tailored for men." />
                    <CategoryCard id="box3" img={Category3} title="Wase-Coat" content="Elevate your look with our sophisticated tailor-made waistcoats." />
                    <CategoryCard id="box4" img={Category4} title="Shalwaar-Kameez" content="Experience the elegance of tailor-made shalwar kameez suits." />
                </div>
            </div>
        </section>
    )
}

export default Category