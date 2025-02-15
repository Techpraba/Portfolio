import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar() {
    return (
        <>

            <div class="nav">
                <div class="container">
                    <Link to="./">  <div class="btn"><h3>Home</h3></div></Link>
                    <Link to="./About">    <div class="btn"><h3>About</h3></div></Link>
                    <Link to="./Project">   <div class="btn"><h3>Project</h3></div></Link>
                    <Link to="./Contact"> <div class="btn"><h3>Contact</h3></div></Link>
                    <svg
                        class="outline"
                        overflow="visible"
                        width="400"
                        height="60"
                        viewBox="0 0 400 60"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            class="rect"
                            pathLength="100"
                            x="0"
                            y="3"
                            width="1532"
                            height="60"
                            fill="transparent"
                            stroke-width="5"
                        ></rect>
                    </svg>
                </div>
            </div>


        </>
    );
}

export default NavBar;

{/* <div className="navbar">
    <Link to="./"> <button className='btn'>Home</button></Link>
    <Link to="./About">   <button className='btn'>  About </button></Link>
    <Link to="./Project">  <button className='btn'> Projects </button></Link>
    <Link to="./Contact">  <button className='btn'> Contact</button></Link>
</div> */}

// <Link to="./">  <div class="btn">Home</div></Link>
// <Link to="./About">    <div class="btn">Contact</div></Link>
// <Link to="./Project">   <div class="btn">About</div></Link>
// <Link to="./Contact"> <div class="btn">About</div></Link>
