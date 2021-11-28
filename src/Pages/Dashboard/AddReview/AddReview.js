import axios from 'axios';
import React from 'react';
import {useForm, Controller} from "react-hook-form";
import './AddReview.css'
import { Rating } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const AddReview = () => {
    const {user, isLoading} = useAuth();
    const {register, handleSubmit, reset, control} = useForm();
    const onSubmit = data =>{ 
        console.log(data);

        axios.post('https://sheltered-beach-22453.herokuapp.com/reviews', data)
        .then(res => {
            console.log(res);
            if(res.data.insertedId){
                alert('added successfully');
                reset(); }
        })
           
    }

    return (
        <div className="add-review">
            <h2>Please Add a Review</h2>
        {!isLoading &&
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("model", { required: true, maxLength: 50 })} placeholder="Car Model" />
            <input {...register("reviewerName", { required: true, maxLength: 50 })} placeholder="Your Name" defaultValue={user.displayName}/>
            <textarea {...register("comment")} placeholder="Comment" />
            <input type="number" {...register("price")} placeholder="Price" />
            <input {...register("img")} placeholder="image url" />
            <input type="number" {...register("rating", { min: 0, max: 5 })} placeholder="Rate Us (1-5)" />
            
            {/* <Controller
      name="rating"
      control={control}
      rules={{ required: true }}
      render={(props) => <Rating name="rating" />}
      
    /> */}
            <input type="submit"/>
        </form> 
        }
            {isLoading &&  <Spinner animation="border" variant="danger" /> }
        </div>
    );
};

export default AddReview;