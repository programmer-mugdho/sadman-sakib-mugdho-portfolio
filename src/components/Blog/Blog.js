import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div id='blog'>
            <h1 className="title">MY <span>BLOGS</span></h1>
            <div className="row">
                <div className="col-md-6">
                    <div class="card m-auto" style={{ width: "22rem", height: '33rem' }}>
                        <img src="https://miro.medium.com/max/700/0*gV036LtbnuhqvSXn" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a target="_blank" href="https://medium.com/weekly-webtips/10-tips-tricks-for-new-javascript-developers-86f01d8cb5e">
                                <h5 class="card-title mb-4">10 Tips & Tricks For New JavaScript Developers</h5>
                            </a>
                            <p class="card-text">Wanna develop your JavaScript coding skills and save time during coding? Check out these 10 Tips & Tricks which will simplify your code and make you a smart developer.</p>
                            <div className="project-action">
                                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/weekly-webtips/10-tips-tricks-for-new-javascript-developers-86f01d8cb5e">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="card m-auto" style={{ width: "22rem", height: '33rem' }}>
                        <img src="https://miro.medium.com/max/700/0*GTXEw9LgA8a9hQ-c" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <a target="_blank" href="https://medium.com/@programmer.mugdho/10-javascript-best-practices-for-new-developers-9a4836f59532">
                                <h5 class="card-title mb-4">10 JavaScript Best Practices For New Developers</h5>
                            </a>
                            <p class="card-text">Every programming language has a Style Guide of its own. A style guide is an opinionated guide of programming conventions, style, and best practices for a team or project.</p>
                            <div className="project-action">
                                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@programmer.mugdho/10-javascript-best-practices-for-new-developers-9a4836f59532">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;