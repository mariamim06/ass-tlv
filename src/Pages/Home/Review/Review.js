import React from 'react';
import './Review.css';


const Review = ({review}) => {
    //const {traveller} = props;
    const { model, reviewerName, comment, img, price} = review;
    return (

        <div className="review">
            <img src={img} alt="" /> 
           <div className="text-start px-5">
           <h2>{model}</h2>
           <p className="text-bold">by {reviewerName}</p>
          <p className="">{comment}</p>
           </div>
           <h5 className="text-start">Price: ${price}</h5>
        </div>
    );
};

export default Review;