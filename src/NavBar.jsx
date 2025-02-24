import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FiAlignJustify } from "react-icons/fi";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="nav">
                <div className="container">
                    <Link to="./" className="logo">MyPortfolio</Link>

                    {/* Hamburger Menu Icon */}
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <FiAlignJustify />
                    </div>

                    {/* Navigation Links */}
                    <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <Link to="./">Home</Link>
                        <Link to="./About" >About</Link>
                        <Link to="./Project" >Projects</Link>
                        <Link to="./Contact" >Contact</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
