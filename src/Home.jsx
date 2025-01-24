import { useState } from "react";
import './Home.css'
import { Link } from "react-router-dom";
import pic from './assets/pic.png'
function Home() {
    return (
        <div className="homeoverall ">
            <div className="home">
                <div className='propic'>

                </div>
                <div className='content'>
                    <h1>Hi,I AM PRABAKARAN </h1>
                    <h2>I am FullStack Developer</h2>
                    <p>I have knowledge about in  real-time projects. And I have done functionality and API integration in Admin panel projects. Then I learned many things on myself about FullStack</p>
                    <Link to="./About">  <button className="abtbtn">About Me...!</button></Link>
                </div>
            </div>
        </div >
    )
};
export default Home;




