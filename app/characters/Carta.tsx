// Queremos que as cartas sejam mais dinâmicas. Logo, usaremos
// o cliente para renderizá-las.

"use client"; // Possibilita uso de hooks do React
import { useState } from "react";

export default function Carta({ data }: any): JSX.Element {
  const [showMore, setShowMore] = useState(false);

  const handleMouseEnter = () => {
    setShowMore(true);
  };

  const handleMouseLeave = () => {
    setShowMore(false);
  };

  return (
    // Mostra mais informações ao passar com o mouse por cima
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={data.image} alt={data.name} />
      <div className="card-description">
        <p className="card-name">{data.name}</p>
        <div className="details">
          {showMore && (
            <>
              <p className="card-location">Location: {data.location.name}</p>
              <p>Gender: {data.gender}</p>
              <p>Status: {data.status}</p>
              <p>Origin: {data.origin.name}</p>
            </>
          )}
        </div>
      </div>
      {/* 
      Gostaria de saber: existe um event listener pra este caso abaixo?
      Eu não sei se é a melhor prática aninhar o Link no botão. Qual é a
      melhor prática neste caso?
      */}
      <button className="card-button">
        Read More
      </button>
    </div>
  );
}
