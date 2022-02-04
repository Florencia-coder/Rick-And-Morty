import { Link } from "react-router-dom"
import './card.css'
export default function Card(props){
    return(
        <div key= {props.id} class="card">
            <img src={props.img} alt="Image not found" className='imagen'></img>
            <div >
            <Link to={`/home/${props.id}`} class="card-title" > {props.name} </Link>
            </div>
        </div>
    )
}