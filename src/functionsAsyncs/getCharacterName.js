import axios from "axios";

export default async function GetCharacterName(name){
    let charName = await axios.get(`https://rickandmortyapi.com/api/character?name=${name}`)
    return charName.data;
}