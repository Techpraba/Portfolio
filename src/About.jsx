import React from "react";
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import react from './assets/react.png';
import node from './assets/node.png';
import bootstrap from './assets/bootstrap.png';
import mongodb from './assets/mongodb.png';
import docker from './assets/docker.png';
import resume from './assets/praba-Resume.pdf'; // Ensure correct path
import './About.css';

const skills = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: bootstrap, name: "BOOTSTRAP" },
    { img: js, name: "JAVASCRIPT" },
    { img: react, name: "REACT JS" },
    { img: docker, name: "DOCKER" },
    { img: node, name: "NODE JS" },
    { img: mongodb, name: "MONGODB" },
];

const About = () => {
    return (
        <div className="abtoverall">
            <div className="abtcontainer">
                <h1 className="abt">About <span>Me</span></h1>

                <div className="box">
                    {/* Personal Information */}
                    <div className="box1">
                        <h1>Personal Information</h1>
                        <div className="info">
                            <div>
                                <h2>Name: <span>Prabakaran</span></h2>
                                <h2>Age: <span>22</span></h2>
                                <h2>Email: <span>Praba104016@gmail.com</span></h2>
                                <h2>Freelance: <span>Available</span></h2>
                            </div>
                            <div>
                                <h2>Coding Languages:
                                    <span> HTML, CSS, Bootstrap, <br />
                                        JavaScript, React.js, Node.js, Express.js, MongoDB</span>
                                </h2>
                                <h2>Skill: <span>Full-Stack Developer</span></h2>
                                <h2>Experience: <span>Fresher</span></h2>
                                <h2>Languages: <span>Tamil, English</span></h2>
                            </div>
                        </div>
                        <a href={resume} download className="infobtn">Download Resume</a>
                    </div>

                    {/* Experience / Projects */}
                    <div className="box2">
                        <div>
                            <h1>6 <br /><span>Months of Internship</span></h1>
                        </div>
                        <div className="project">
                            <div><h1>20+ <br /><span>Projects Completed</span></h1></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <h1 className="mySkill">My <span>Skills</span></h1>
            <div className="Skill">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <img src={skill.img} alt={skill.name} />
                        <h5>{skill.name}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
