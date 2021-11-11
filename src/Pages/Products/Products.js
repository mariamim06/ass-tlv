import React, { useEffect, useState} from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2>All Of Our Collections are Here</h2>
            <div className="products-container">
            
            {
                products.map(product => <Product
                    id={product.id}
                    product ={product}
                ></Product>)
            }
        </div>
        </div>
    );
};

export default Products;