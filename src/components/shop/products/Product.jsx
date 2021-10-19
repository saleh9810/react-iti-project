import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
    return (
        <div key={product.id} className="product col-lg-3">
         <Link to={`/shop/${product.id}`}> <img className="w-50" src={product.image} alt={product.title} /> </Link>
            <h5 className="productTitle mt-3">{product.title}</h5>
        </div>
    )
}

export default Product
