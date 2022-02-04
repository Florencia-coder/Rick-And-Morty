import axios from 'axios';
import {useQuery} from 'react-query';


async function axiosCaracters(numPage){
  let caracters = await axios.get(`https://rickandmortyapi.com/api/character?page=${numPage}`)
  return caracters.data;
}

export default function GetCaracters(numPage){
    return useQuery(['Characters', numPage],()=> axiosCaracters(numPage),{
        staleTime:Infinity
    })
}