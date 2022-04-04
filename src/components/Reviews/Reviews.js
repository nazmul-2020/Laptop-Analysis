import React from 'react';
import useReview from '../hooks/useReview';
import './Reviews.css'
import ReviewInfo from '../ReviewInfo/ReviewInfo';

const Reviews = () => {
    const [reviews, setReview] = useReview();

    return (
        <div className='review-container'>
            <div className='reviews'>
            {
                reviews.map(review => <ReviewInfo
                    key={review.id}
                    review={review}
                ></ReviewInfo>)
            }

        </div>
        </div>
    );
};

export default Reviews;