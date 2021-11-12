import React, { useEffect, useState} from 'react';
import Package from '../Package/Package';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    
    return (
        <div id="packages">
            <h2 className="my-5">Our Collections</h2>
            <div className="package-container">
            
            {
                packages.slice(2, 6).map(pacKage => <Package
                    id={pacKage.id}
                    pacKage ={pacKage}
                ></Package>)
            }
        </div>
<NavLink style={{textDecoration: 'none'}} to="/products">
    <Button variant="danger border-danger ">See more Collections</Button>
</NavLink>
        </div>
    );
};

export default Packages;