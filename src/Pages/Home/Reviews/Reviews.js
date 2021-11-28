
import React, { useEffect, useState} from 'react';
import Review from '../Review/Review'
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Reviews.css';

const Reviews = () => {

    
const [reviews, setReviews] = useState([])
useEffect(() => {
    fetch('https://sheltered-beach-22453.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
}, [])


    return (
        <div id="reviews" >
            <h4 className=" my-5">Reviews</h4>
            <h2>What Clients Say About Us</h2>
            <div className="reviews-container">
            {
                reviews.map(review =><Review
                key={review.id}
                review={review}></Review>)
            }
            </div>
<NavLink style={{textDecoration: 'none'}} to="/addReview">
    <Button variant="danger border-danger ">Want to add a review?</Button>
</NavLink>
        </div>
    );
};

export default Reviews;