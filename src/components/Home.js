import { useState } from "react";
import GetCaracters from "../functionsAsyncs/getCaracters";
import Characters from "./characters";
import Header from "./header";
import "./Home.css";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, error, data: characters } = GetCaracters(pageNumber);

  if (error) return <p>Error:{error.message} </p>;
  return (
    <div className="home">
      <Header pageNumber={pageNumber} setPageNumber={setPageNumber} />
      {isLoading ? (
        <div className="loading">
          <h5 className="loading-name">Loading...</h5>
        </div>
      ) : (
        <Characters data={characters} />
      )}
    </div>
  );
}
