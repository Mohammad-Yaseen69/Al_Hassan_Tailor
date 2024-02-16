import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Navbar, Footer, ProductCard } from '../components';
import service from '../appwrite/DB&Storage';
import auth from '../appwrite/auth';
import { login, logout } from '../store/authSlice';
import { setProducts } from '../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { set } from 'react-hook-form';


const CategoryProducts = () => {
    const { category } = useParams()
    const [filterData, setFilterData] = useState([])
    const { isAdmin } = useSelector(state => state.user)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

   
    useEffect(() => {
        const getProducts = async () => {
            const userData = await auth.getCurrentUser()
            const products = await service.listProducts()
            const filterProducts = products.documents.filter(product => product.Category === category)

            if (userData) {
                dispatch(login(userData))
            }
            else {
                dispatch(logout(userData))
            }
            setLoading(false)
            dispatch(setProducts(products))
            setFilterData([...filterProducts])
        }
        getProducts()
    }, [])

    return (
        <div>
            <Navbar />
            <div className={`${loading ? 'h-screen' : 'h-auto'} py-28 w-full `}>
                <h1 className='text-center my-7 relative max-ss:text-4xl font-RussoOne font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-300 to-gray-500'>{category.toUpperCase()}</h1>

                {loading ? <div className='loader absolute top-[50%] left-[50%] '></div> :
                    <div className='flex flex-wrap gap-5 justify-center items-center w-full h-auto'>

                        {filterData.map((product) => {
                            const filePreview = service.getFilePreview(product.Img)
                            return (<ProductCard
                                $id={product.$id}
                                Description={product.Description}
                                Img={filePreview}
                                ImgId={product.Img}
                                Price={product.Price}
                                Title={product.Title}
                                key={product.$id}
                                isAdmin={isAdmin}
                            />)
                        })}
                    </div>}
            </div>
            <Footer />
        </div>
    )
}

export default CategoryProducts