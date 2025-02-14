import React from "react";
import '../component/card.css'

function Card({ propics, webName, lang, dis }) { 
    return (
        <div className="projectCard">
            <img src={propics} alt="Anime Watching Website" />
            <h2 className="WebsiteName">{webName}</h2>
            <p className="lang">{lang}</p>
            <p>
                {String(dis).split("\n").map((line, index) => ( 
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>
        </div>
    );
}

export default Card;
