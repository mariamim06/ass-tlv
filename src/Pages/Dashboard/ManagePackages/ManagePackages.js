import React, { useState, useEffect  } from 'react';
// import Packages from '../../Home/Home';
// import usePackages from '../../hooks/usePackages';

const ManagePackages = () => {
  
    const [packages, setPakages] = useState([])
    useEffect( () => {
        fetch('https://sheltered-beach-22453.herokuapp.com/products')
        .then(res=>res.json())
        .then(data => setPakages(data))
    }, [])

    const handleDelete = id => {
        const url = `https://sheltered-beach-22453.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if('data.deleteCount'){
                alert('deleted')
                const remaining = packages.filter(pacKage => pacKage._id !== id);
                setPakages(remaining);
            }
           
        })
    }
    return (
        <div className="">
            <h2>Manage Pakages</h2>
            {
                packages.map(pacKage => <div key={pacKage._id}>
                    <img className="img-fluid" src={pacKage.img} alt="" />
                    <h3>{pacKage.name}</h3>
                    <p>{pacKage.description}</p>
                    <button onClick={ () => handleDelete(pacKage._id)} className="btn btn-warning">Delete</button>
                    </div>)
            }
        </div>
    );
};

export default ManagePackages;