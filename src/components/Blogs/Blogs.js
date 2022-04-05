import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='all-blogs'>
            <h1>Blogs</h1>
            <div className="blog">
                <div className="review-info">
                <h3> What is Semantic tag? </h3>
                <p>Semantic HTML5  elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. Semantic tag example : article,aside,details,figcaption,figure,footer,header,main,mark,nav,section,summary,time.</p>
                </div>
                <div className="review-info">
                <h3>What is the Purpose of Context API ?</h3>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.The Context API is useful for sharing data that can be considered global, such as the currently authenticated user, the theme settings for the application, and more.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Blogs;