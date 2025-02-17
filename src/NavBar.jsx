import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="nav">
                <div className="container">
                    <Link to="./" className="logo">MyPortfolio</Link>

                    {/* Hamburger Menu Icon */}
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </div>

                    {/* Navigation Links */}
                    <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <Link to="./" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="./About" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link to="./Project" onClick={() => setMenuOpen(false)}>Projects</Link>
                        <Link to="./Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
