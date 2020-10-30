import React from 'react';
import image from '../../images/20201028_192426.png'
import './About.css'

const About = () => {
    return (
        <div id='about'>
            <h1 className="title"><span>ABOUT</span> ME</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="about-details">
                        <p>
                            Hello! I'm Sadman Sakib Mugdho, a passionate MERN Stack Developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I am available for any kind of job opportunity that suits my interests.
                        </p>
                        <div className="action mt-5">
                            <a className='btn' href="#">Get Resume</a>
                            <a className='btn' href="#about" target rel>About Me</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="image pl-5">
                        <img width='90%' src={image} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;