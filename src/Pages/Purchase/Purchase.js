import React, { useEffect, useState } from 'react';
import './Purchase.css';
import { useParams } from 'react-router';
import { Form, Button, Spinner} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import {Link} from 'react-router-dom'


const Purchase = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const {user} = useAuth();

    useEffect( () =>{
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [])


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // const newLoginData = {...loginData};
        // newLoginData[field] = value;
        // setLoginData(newLoginData);
        console.log(field, value);
    }


    const handlePurchaseSubmit = e => {
        alert('submitting');
        e.preventDefault();
    }


    return (
    <section className="flexible-container">
 
{/* ------------- ------------- ------------------ ------------- --------------- --------- ----------------------- form section for making a purchase ----------------- --------------- ------------ ------------- ---------  */}
    <div>
        <h3>Please provide these information to make a purchase</h3>


    
<Form onSubmit={handlePurchaseSubmit}>
    <Form.Group className="mt-3 d-flex" controlId="formBasicText">
        <Form.Label className="m-3">Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" defaultValue={user.displayname} onBlur={handleOnChange}/>
    </Form.Group>
    <Form.Group className="mt-3 d-flex" controlId="formBasicEmail">
        <Form.Label className="m-3">Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={user.email} onBlur={handleOnChange}/>
    </Form.Group>
    <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="m-3">Address:</Form.Label>
        <Form.Control as="textarea" placeholder="Enter address" name="address" onBlur={handleOnChange} rows={3} />
    </Form.Group>
    <Form.Group className="mt-3 d-flex" controlId="formBasicNumber">
        <Form.Label className="m-3">Number:</Form.Label>
        <Form.Control type="number" placeholder="Enter our Number" name="number" onBlur={handleOnChange}/>
    </Form.Group>
    <Form.Text className="text-muted">We'll never share your informations with anyone else.</Form.Text>




{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group> */}

<Button variant="danger px-5 mb-2" type="submit">
       Confirm Purchase
</Button>
{/* <br />
<NavLink style={{textDecoration: 'none'}} to="/login">
    <Button variant="text text-danger border-danger ">Already Registered? Please Login...</Button>
</NavLink>
<br />  */}
{/* google sign in */}
{/* <button onClick={ handleGoogleLogin } className="btn btn-warning my-btn mt-3">Google Sign In</button> */}
</Form>



    </div>

    {/* ------------ ----------------- ---------------------- --------------------- ---------------- -------------  Clicked product details section -------------- -------------- ------------ --------------- ----      ----- ------------- */}
        
    <div className="product">
        <img src={product.img} alt="" /> 

        <h5>Price: ${product.price}</h5>

        <h2>{product.name}</h2>
        <p className="px-3">{product.description}</p>

        {/* <Link to={`//${productId}`}>
        <button className="btn btn-warning my-2">Book Now</button>
        </Link> */}
    </div>
    </section>
    );
};

export default Purchase;