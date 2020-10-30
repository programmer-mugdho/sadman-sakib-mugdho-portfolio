import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header'
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import Particles from 'react-particles-js';

const Home = () => {
    return (
        <div class='container'>
            <Particles
                style={{ position: 'absolute', top: 0, left: 0 }}
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
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
