import { Link } from 'react-router-dom';
import './NavBar.css'
function CollapsibleExample() {
    return (
        <>
            <div className="navbar">
                <Link to="./"> <button className='btn'>Home</button></Link>
                <Link to="./About">   <button className='btn'>  About </button></Link>
                <Link to="./Service">  <button className='btn'> Projects </button></Link>
                <Link to="./Contact">  <button className='btn'> Contact</button></Link>
            </div>
        </>
    );
}

export default CollapsibleExample;