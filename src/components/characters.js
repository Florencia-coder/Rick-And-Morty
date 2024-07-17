import "./characters.css";
import Card from "./card";

export default function Characters({ data }) {
  return (
    <>
      <div class="body-characters">
        {data &&
          data.results.map((el) => {
            return (
              <Card key={el.id} name={el.name} img={el.image} id={el.id} />
            );
          })}
      </div>
    </>
  );
}
