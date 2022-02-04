import './characters.css'
import Card from './card';
import GetCaracters from '../functionsAsyncs/getCaracters.js';
import { useState } from 'react';

export default function Characters(){
  const[pageNumber, setPageNumber] = useState(1)
  const {isLoading, error, data} = GetCaracters(pageNumber)
  
  if(error) return <p>Error:{error.message} </p>
  if(isLoading) return <p>Loading...</p>
    return (
      <>
      <div className= 'conteiner-button'>
        <button type="button" class="btn btn-outline-secondary" onClick={()=> setPageNumber(page => page-1)} disabled={pageNumber===1}>↤</button>
        <button type="button" class="btn btn-outline-secondary" onClick={()=> setPageNumber(page => page+1)} disabled={pageNumber===42}>↦</button>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4" >
        {
          data && data.results.map(el=>{
            return(
            <Card key={el.id} name= {el.name} img={el.image} id={el.id} />
            )
          })
        }
      </div>
      </>
    )
}