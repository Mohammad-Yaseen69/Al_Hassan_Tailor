import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryProducts = () => {
    const {category}  = useParams()

    console.log(category);
    return (
        <div>CategoryProducts</div>
    )
}

export default CategoryProducts