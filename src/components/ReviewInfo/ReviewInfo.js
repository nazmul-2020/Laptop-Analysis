import React from 'react';
import './ReviewInfo.css'

const ReviewInfo = (props) => {
    const { name,img,review, ratings} = props.review;
    return (

        <div className='review-info'>
            <div className='dd'>
            <img src= {img} alt="" />
            <h4>Name : {name}</h4>
            </div>
            <p><span>Review</span> : {review}</p>
            <p><small>Ratings : </small>{ratings}</p>
           
        </div>

    );
};

export default ReviewInfo;