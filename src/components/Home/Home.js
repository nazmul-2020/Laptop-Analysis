import React from 'react';
import './Home.css'
import laptop from "../../Assets/Image/laptop.jpg"
import useReview from '../hooks/useReview';
import { Link } from 'react-router-dom';
import ReviewInfo from '../ReviewInfo/ReviewInfo';

const Home = () => {
    const [reviews, setReview] = useReview();
    console.log(reviews);
    return (
        <section className='section-container'>

            <div className="home-container">
                <div className="home-text">
                    <h1>Latest unique Laptop your best Laptop  </h1>
                    <p>The best laptop of can come with a variety of brands, prices, and features. Here, we’ve got the rest of the best laptops, Windows 10 business notebooks, gaming rigs, Chromebooks, laptops for school, and 2-in-1 convertibles.</p>
                </div>
                <div className="Image">
                    <img src={laptop} alt="" />
                </div>
            </div>
            <div className="reviews-container">
                <h1>Customer Reviews</h1>
                <div className='reviews'>
                    {
                        reviews.slice(0, 3).map(review => <ReviewInfo
                            key={review.id}
                            review={review}
                        ></ReviewInfo>)
                    }
                </div>

                <button className='btn'><Link to='/Reviews'>See All Reviews</Link></button>

            </div>
        </section>
    );
};

export default Home;