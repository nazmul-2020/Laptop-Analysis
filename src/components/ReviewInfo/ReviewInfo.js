import React from 'react';
import './ReviewInfo.css'

const ReviewInfo = (props) => {
    const { name,img,review, ratings} = props.review;
    return (

        <div className='review-info'>
            <h4>Name : {name}</h4>
            <p><span>Review</span> : {review}</p>
            <p><small>Ratings : {ratings}</small></p>
           
        </div>

    );
};

export default ReviewInfo;