import { useQuery } from "react-query";
import { useParams } from "react-router";
import GetCharacterId from "../functionsAsyncs/getCaracterId";
import './detailCharacter.css'

export default function DetailCharacter(props){
    const {id} = useParams();
    const { isLoading, data, error  } = GetCharacterId(id)
    if(error) return <h1>Error: {error.message} </h1>
    if(isLoading) return <h1>Loading...</h1>
    return(
        <div className='conteiner-detail'>
            <div id='izquierda'>
            <h1 id='name'>{data.name}</h1>
            <h2>Specie: {data.species} </h2>
            <h2>Origin: {data.origin.name} </h2>
            <h4>Location: {data.location.name} </h4>
            </div>
            <div id='derecha'>
            <img src= {data.image} id='img'></img>
            </div>
        </div>
    )

}