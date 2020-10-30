import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="intro">
                <div class="intro-text">
                    <p>Hello! I am</p>
                    <h1>Sadman Sakib Mugdho</h1>
                    <h3>MERN Stack Developer</h3>
                    <div className="expert">
                        <span>Web Developer</span>
                        <span>Programmer</span>
                        <span>Software Engineer</span>
                    </div>
                    {/* <div class="action"><a style="color:rgba(255, 255, 255, 0.85);border-color:#00cf5d;background-color:#00cf5d" target="__blank" rel="noopener noreferrer" class="btn" href="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf">Get Resume</a><a style="margin-left:15px;color:rgba(255, 255, 255, 0.85);border-color:#00cf5d;background-color:transparent" target="" rel="" class="btn" href="#about">About Me</a></div></div> */}
                    <div className="action">
                        <a className='btn' href="#">Get Resume</a>
                        <a className='btn' href="#about" target rel>About Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
