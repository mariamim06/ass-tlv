import axios from 'axios';
import React from 'react';
import {useForm} from "react-hook-form";
import './AddReview.css'


const AddReview = () => {

    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{ 
        console.log(data);

        axios.post('http://localhost:5000/reviews', data)
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
                <input type="submit"/>
            </form>
        </div>
    );
};

export default AddReview;