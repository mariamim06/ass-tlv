import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([])

    useEffect( () => {
        fetch('https://sheltered-beach-22453.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data => setOrders(data))
    }, [])


    const updateStatus = id => {
        
        fetch(`https://sheltered-beach-22453.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
        })

        // id.preventDefault();
    }

    const handleDelete = id => {
        const url = `https://sheltered-beach-22453.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if('data.deleteCount'){
                alert('deleted')
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            }
           
        })
        
    }
    return (
        <div>
            <h1>Manage All Orders</h1>
            {
                orders.map(order => <div key={order._id}>
                   <div className="container-fluid orders">
                   <img className="img-fluid" src={order.productImg} alt="" />
                    <div>
                    <h5>Car Model: {order.productName}</h5>
                    <h6>Buyer Name: {order.buyerName}</h6>
                    {/* <p>{order.description}</p> */}
                    <div className="d-flex">
                        
                    {!order.status && <button onClick={ () => updateStatus(order._id)} className="btn btn-warning">update</button>}
                    {order.status && <div class="alert alert-success w-10" role="alert">Order Shipped!</div>}
                    
                    <button onClick={ () => handleDelete(order._id)} className="btn btn-warning height-5">Delete</button>
                    </div>
                    </div>
                   </div>
                    </div>)
            }
        </div>
    );
};

export default ManageAllOrders;