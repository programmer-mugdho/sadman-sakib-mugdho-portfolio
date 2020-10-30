import React from 'react';
import './Skills.css'
const skillsData = [
    {
        name: "React",
        ability: 80
    },
    {
        name: "JavaScript",
        ability: 80
    },
    {
        name: "Html",
        ability: 90
    },
    {
        name: "CSS",
        ability: 85
    },
    {
        name: "Bootstrap",
        ability: 85
    },
    {
        name: "Material UI",
        ability: 70
    },
    {
        name: "Firebase",
        ability: 60
    },
    {
        name: "React Router",
        ability: 60
    },
    {
        name: "Node",
        ability: 40
    },
    {
        name: "Express",
        ability: 40
    },
    {
        name: "Mongo DB",
        ability: 40
    },
    {
        name: "Git",
        ability: 60
    },
    {
        name: "VS Code",
        ability: 80
    },
    {
        name: "Chrome Dev Tools",
        ability: 60
    },
    {
        name: "Netlify",
        ability: 50
    },
    {
        name: "Heroku",
        ability: 50
    },
    {
        name: "NPM",
        ability: 60
    },

]
const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <h1 className="title">MY <span>SKILLS</span></h1>
            <div className="row">

                {
                    skillsData.map(data =>
                        <div className="col-md-4">
                            <div className="card-container">
                                <div className="card">
                                    <h4>{data.name}</h4>
                                    <p>{data.ability}%</p>
                                    <div style={{ width: `${data.ability}%` }} className="progress-ar"></div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Skills;