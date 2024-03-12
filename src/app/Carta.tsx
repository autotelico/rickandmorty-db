// Queremos que as cartas sejam mais dinâmicas. Logo, usaremos
// o cliente para renderizá-las.

"use client"; // Possibilita uso de hooks do React
import { useState } from "react";

interface Characters {}

export default function Carta({ data }): ReactElement {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
  }

  // {imagem, nome, status, genero, localidade, origem}
  return (
    <div
      className="card"
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
    >
      <img src={data.image} alt={data.name} />
      <div className="card-description">
        <p>{data.name}</p>
        {showMore && (
          <>
            <p>Gender: {data.gender}</p>
            <p>Location: {data.location.name}</p>
            <p>Status: {data.status}</p>
            <p>Origin: {data.origin.name}</p>
          </>
        )}
      </div>
      {showMore && <button className="card-button">Read More</button>}
    </div>
  );
}
