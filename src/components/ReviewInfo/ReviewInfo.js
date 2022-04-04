import React from 'react';
import './ReviewInfo.css'

const ReviewInfo = (props) => {
    const { name,img,review, ratings} = props.review;
    return (

        <div className='aa'>
            <h5>Name :{name}</h5>
            <p>Review :{review}</p>
            <p><small>Ratings :{ratings}</small></p>
           
        </div>

    );
};

export default ReviewInfo;