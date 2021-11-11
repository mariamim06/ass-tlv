import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const { _id, name, price, img, ratings, description} = product;
    return (
        <div className="product">
             <img src={img} alt="" /> 


<h2>{name}</h2>

<h5>Price: ${price}</h5>

<p className="px-3">{description}</p>
<Link to={`/purchase/${_id}`}>
<button className="btn btn-warning my-2">Book {name.toLowerCase()} </button>
</Link>
        </div>
    );
};

export default Product;