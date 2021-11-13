import React from 'react';
import './Review.css';
import { Rating } from '@mui/material';


const Review = ({review}) => {
    //const {traveller} = props;
    const { model, reviewerName, comment, img, price, rating} = review;
    return (

        <div className="container-fluid">
        <div className=" review">
            <img className="img-fluid" src={img} alt="" /> 
           <div className="text-start px-5">
           <h2>{model}</h2>
           <p className="text-bold">by {reviewerName}</p>
          <p className="">{comment}</p>
           <Rating name="read-only" value={rating} count={rating} readOnly />
           </div> 
           <h5 className="text-start">Price: ${price}</h5>
           
        </div>
        </div>
    );
};

export default Review;