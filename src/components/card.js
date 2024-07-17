import { Link } from "react-router-dom";
import DetailCharacter from "./detailCharacters";
import "./card.css";
export default function Card(props) {
  return (
    <div key={props.id} className="card">
      <div className="card-inner">
        <div className="card-front">
          <img className="front-img" src={props.img} alt="Character img"></img>
          <h3 className="front-name">{props.name}</h3>
        </div>
        <div className="card-back">
          <DetailCharacter id={props.id} />
        </div>
      </div>
    </div>
  );
}
