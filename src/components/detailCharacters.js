import GetCharacterId from "../functionsAsyncs/getCaracterId";
import "./detailCharacter.css";

export default function DetailCharacter({ id }) {
  const { isLoading, data, error } = GetCharacterId(id);
  if (error) return <h1>Error: {error.message} </h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>{data.name}</h1>
      <h2>Specie: {data.species} </h2>
      <h2>Origin: {data.origin.name} </h2>
      <h2>Location: {data.location.name} </h2>
    </>
  );
}
