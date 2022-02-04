import { Link } from "react-router-dom";
import './LandingPage.css';

export default function LandingPage(){
    return(
        <div className= 'landing'>
            <Link to='/home' className="button">A journey through the characters of Rick and morty</Link>
        </div>
    )
}