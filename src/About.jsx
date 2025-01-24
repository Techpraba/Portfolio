import React from "react";
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import react from './assets/react.png'
import node from './assets/node.png'
import bootstrap from './assets/bootstrap.png'
import mongodb from './assets/mongodb.png'
import docker from './assets/docker.png'
import './About.css'

class About extends React.Component {
    render() {
        return (
            <div className="abtoverall">
                <div className="abtcontainer">
                    <h1 className="abt">About <span>Me</span></h1>
                    <div className="box">
                        <div className="box1">
                            <h1>Personal Information</h1>
                            <div className="info">
                                <div>
                                    <h2>Name : <span> Prabakaran</span></h2>
                                    <h2>Age : <span>22</span></h2>
                                    <h2>Email : <span>Praba104016@gmail.com</span></h2>
                                    <h2>Freelance : <span>Available</span></h2>
                                </div>
                                <div>
                                    <h2>Codding Language : <span> HTML&CSS ,Bootstrap , <br /> JavaScript ,React js ,  Node js , Express js , MongoDB </span> </h2>
                                    <h2>Skill : <span> FullStack Developer</span></h2>
                                    <h2>Experience : <span>Fresher</span></h2>
                                    <h2>Language : <span>Tamil,English</span></h2>
                                </div>
                            </div>
                            <a href="./assets/praba-Resume.pdf" download className="infobtn">Download Resume</a>
                        </div>
                        <div className="box2">
                            <div>
                                <h1> 1 <br /><span>years of Exp</span> </h1>

                            </div>
                            <div className="project">
                                <div> <h1> 6 <br /><span>Month of Internship</span> </h1></div>
                                <div> <h1> 20+ <br /><span>Project  Complete</span> </h1></div>
                            </div>

                        </div>
                    </div>
                </div>

                <h1 className="mySkill">My <span>Skills</span></h1>
                <div className="Skill">
                    <div>
                        <img src={html} alt="html" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img src={css} alt="css" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img src={bootstrap} alt="bootstrap" />
                        <h5>BOOTSTRAP</h5>
                    </div>
                    <div>
                        <img src={js} alt="js" />
                        <h5>JAVASCRIPT</h5>
                    </div>
                    <div>
                        <img src={react} alt="react" />
                        <h5>REACT JS</h5>
                    </div>
                    <div>
                        <img src={docker} alt="docker" />
                        <h5>DOCKER</h5>
                    </div>
                    <div>
                        <img src={node} alt="node" />
                        <h5>NODE JS</h5>
                    </div>
                    <div>
                        <img src={mongodb} alt="mongodb" />
                        <h5>MONGODB</h5>
                    </div>







                </div>
            </div >
        )
    }
};
export default About;