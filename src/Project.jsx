import React from "react";
import './Project.css';
import Card from './component/card'
import pic1 from './assets/animeWebsite.png'
import pic2 from './assets/pokemonCard.png'
import pic3 from './assets/carpenter.png'
import pic4 from './assets/hackthelogic.png'
import pic5 from './assets/addtocart.png'
import pic6 from './assets/watch.png'
class Project extends React.Component {
    render() {
        return (
            <div className="projectoverall">
                <h1 className="work">My <span>Work</span></h1>
                <div className="listOfProjets">
                    <Card propics={pic1} webName={"Anime Watch Website"} lang={"Language are Used : HTML,CSS"} dis={`Navigation Bar: Links to different sections (Home, Popular, Genres, Contact)\nAnime Details Page: Contains anime title, description, rating, and watch button`} />
                    <Card propics={pic2} webName={"Pokemon Card"} lang={"Language are Used : HTML,CSS"} dis={`Pokémon Image and Name – Displays an image and Names of the Pokémon.
                                                                                                            Hover Effect – The card will have a smooth hover animation `} />
                    <Card propics={pic3} webName={"Carpenter Construction "} lang={"Language are Used : HTML,CSS"} />
                    <Card propics={pic4} webName={"Business Website"} lang={"Language are Used : HTML,CSS , JavaScript , Bootstrap , React Js"} />
                    <Card propics={pic5} webName={"Add To Cart"} lang={"Language are Used : HTML,CSS,JavaScript , Bootstrap , React Js"} />
                    <Card propics={pic6} webName={"Watch Design"} lang={"Language are Used : HTML,CSS , JavaScript , Reacr Js"} />
                </div>
            </div>


        )
    }
};
export default Project;