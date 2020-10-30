import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header'
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div class='container'>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Blog />
            <Contact />
        </div>
    );
};

export default Home;