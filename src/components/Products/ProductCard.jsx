import { useDispatch } from 'react-redux'
import React from 'react'
import service from '../../appwrite/DB&Storage';
import { deleteProducts } from '../../store/productsSlice';

const ProductCard = ({ Img, isAdmin, Title, Description, Price, $id, ImgId }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div class="card3">
                <div class="image_container">
                    <img src={Img} className='image' alt="" />
                </div>
                <div class="title overflow-hidden ">
                    <span>{Title}</span>
                    <p className='text-[0.9rem] text-wrap text-gray-300'>
                        {Description}</p>
                </div>
                <div class="action">
                    <div class="price">
                        <span>Rs {Price}</span>
                    </div>

                    {isAdmin &&
                        <button onClick={() => {
                            service.deleteProduct({
                                id : $id
                            })
                            service.deleteFile(ImgId)
                            dispatch(deleteProducts($id))
                        }} class="cart-button">
                            <span>Delete</span>
                        </button>}
                </div>
            </div>

        </div>
    )
}

export default ProductCard