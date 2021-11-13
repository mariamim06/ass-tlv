import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([])

    useEffect( () => {
        const url = `https://sheltered-beach-22453.herokuapp.com/userOrders?email=${user.email}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setOrders(data));
    }, [])


    const handleDelete = id => {
        const url = `https://sheltered-beach-22453.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if('data.deleteCount'){
                alert('Want to delete?')
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            }
           
        })
    }

    return (
        <div>
            <h1>My Orders</h1>
            {
                orders.map(order => <div key={order._id}>
                    <div className="orders">
                    <img className="img-fluid" src={order.productImg} alt="" />
                    <div>
                    <h6>Buyer Name: {order.buyerName}</h6>
                    <h3>Car Model: {order.productName}</h3>
                    {/* <p>{order.description}</p> */}
                     {order.status && <div class="alert alert-success w-10" role="alert">Order Shipped!</div>}
                     {!order.status && <div class="alert alert-success w-10" role="alert">Order Pending!</div>}
                    <button onClick={ () => handleDelete(order._id)} className="btn btn-warning">Delete</button>
                    </div>
                    </div>
                    </div>)
            }
        </div>
    );
};

export default MyOrders;