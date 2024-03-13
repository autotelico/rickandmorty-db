// Queremos que as cartas sejam mais dinâmicas. Logo, usaremos
// o cliente para renderizá-las.

"use client"; // Possibilita uso de hooks do React
import Link from "next/link";
import { ReactElement, ReactNode, useState } from "react";

export default function Carta({ data }: any): ReactNode {
  const [showMore, setShowMore] = useState(false);

  return (
    // Mostra mais informações ao passar com o mouse por cima
    <div
      className="card"
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
    >
      <img src={data.image} alt={data.name} />
      <div className="card-description">
        <p className="card-name">{data.name}</p>
        {showMore && (
          <>
            <p className="card-location">Location: {data.location.name}</p>
            <p>Gender: {data.gender}</p>
            <p>Status: {data.status}</p>
            <p>Origin: {data.origin.name}</p>
          </>
        )}
      </div>
      {/* 
      Gostaria de saber: existe um event listener pra este caso abaixo?
      Eu não sei se é a melhor prática aninhar o Link no botão. Qual é a
      melhor prática neste caso?
      */}
      {showMore && <button className="card-button"><Link href={'/' + data.name}>Read More</Link></button>}
    </div>
  );
}
