import React, { useState } from 'react'
import service from '../../appwrite/DB&Storage'
import { useDispatch } from 'react-redux'
import { setProducts } from '../../store/productsSlice'
import { set } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const AddProductsForm = () => {
    const categories = ['shirts', 'kurta', 'wase-coat', 'shalwaar-kameez']
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState({
        Title: '',
        Description: '',
        Price: '',
        Category: 'shirts',
        Img: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setData({
            Title: '',
            Description: '',
            Price: '',
            Img: ''
        })
        try {
            const UploadFile = await service.uploadFile(data.Img)
            const ImgId = UploadFile.$id
            console.log(data.Category);
            const uploadData = {
                Title: data.Title,
                Description: data.Description,
                Price: data.Price.toString(),
                Category: data.Category,
                Img: ImgId,
            }
            const product = await service.addProduct(uploadData)
            dispatch(setProducts(product))
            navigate('/products')
            console.log(product);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <h2 class="text-3xl font-bold text-gray-800 text-center mb-4">Add Product Form</h2>

            <form onSubmit={handleSubmit} class="flex flex-col">
                <input required value={data.Title} onChange={(e) => setData(prev => ({ ...prev, Title: e.target.value }))} placeholder="Title" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />

                <textarea required value={data.Description} onChange={(e) => setData(prev => ({ ...prev, Description: e.target.value }))} placeholder="Description" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="feedback"></textarea>

                <input required value={data.Price} onChange={(e) => setData(prev => ({ ...prev, Price: e.target.value }))} placeholder="Price" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="number" />

                <input required onChange={(e) => setData(prev => ({ ...prev, Img: e.target.files[0] }))} name="feedback" id="feedback" type="file" placeholder="Img" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" />

                <select required onChange={(e) => setData(prev => ({ ...prev, Category: e.target.value }))} aria-placeholder='Category' class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">

                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>))}
                </select>

                <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddProductsForm