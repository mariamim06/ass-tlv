import axios from 'axios';
import React from 'react';
import {useForm, Controller} from "react-hook-form";
import './AddReview.css'
import { Rating } from '@mui/material';

const AddReview = () => {

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("model", { required: true, maxLength: 50 })} placeholder="Car Model" />
                <input {...register("reviewerName", { required: true, maxLength: 50 })} placeholder="Your Name" />
                <textarea {...register("comment")} placeholder="Comment" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="image url" />
                <Controller
          name="rating"
          control={control}
          defaultValue={3}
          rules={{ required: true }}
          render={(props) => <Rating name="rating" />}
        />
                <input type="submit"/>
            </form>
        </div>
    );
};

export default AddReview;