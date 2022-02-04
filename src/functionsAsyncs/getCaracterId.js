import axios from "axios";
import { useQuery } from 'react-query';

async function axiosCharacterId(characterId){
    let detailId = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
    return detailId.data;
}

export default function GetCharacterId(characterId){
    return useQuery(['character-id', characterId], ()=> axiosCharacterId(characterId))
}