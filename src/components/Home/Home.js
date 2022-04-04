import React from 'react';
import './Home.css'
import laptop from "../../Assets/Image/laptop.jpg"

const Home = () => {
    return (
        <section className='section-container'>
            <h1>home</h1>
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
                <h1>Reviews</h1>
                <button>See All Reviews</button>
            </div>
        </section>
    );
};

export default Home;