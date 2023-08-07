import { Link } from "react-router-dom";

export default function Nav() {
    return (<nav>
            <Link to="/">Home</Link> 
            | <Link to="/about">About</Link> 
            | <Link to="/gallery">Gallery</Link> 
            | <Link to="/profile">Profile</Link> 
            | <Link to="/counter">Counter</Link>
    </nav>);
}