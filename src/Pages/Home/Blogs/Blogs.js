import React from 'react';
import './Blogs.css';
import blog1 from '../../../images/blog/b-1.jpg';
import blog2 from '../../../images/blog/b-2.jpg';
import blog3 from '../../../images/blog/b-3.jpg';

const Blogs = () => {
    return (

        <section>
            <h2 className="pt-5 mt-5">Read Our Blogs</h2>
            <div className="blogs">
            <div className="blog">
                <img src={blog1} alt="" />
                    <p>Leena Sonnubar</p>
                    <h4 className="px-4">Some precautions must be taken</h4>
                    <p>1 April, 2019</p>
                <button className="btn btn-warning m-3">Read More</button>
            </div>
            <div className="blog">
                <img src={blog2} alt="" />
                <p>Leena Sonnubar</p>
                    <h4 className="px-4">Advanced saftey features of new model car</h4>
                    <p>1 April, 2019</p>
                    <button className="btn btn-warning m-3">Read More</button>
            </div>
            <div className="blog">
                <img src={blog3} alt="" />
                <p>Leena Sonnubar</p>
                <h4 className="px-4">You must know this while driving</h4>
                    <p>1 April, 2019</p>
                    <button className="btn btn-warning m-3">Read More</button>
            </div>
        </div>
        </section>
    );
};

export default Blogs;