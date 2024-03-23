// Queremos que as cartas sejam mais dinâmicas. Logo, usaremos
// o cliente para renderizá-las.

'use client'; // Possibilita uso de hooks do React
import { useState } from 'react';
import Link from 'next/link';

interface Data {
  name: string;
  image: string;
  location: { name: string };
  gender: string;
  status: string;
  origin: { name: string };
  species: string;
}

export default function Card({ data }: { data: Data }): JSX.Element {
  const [showMore, setShowMore] = useState<boolean>(false);

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
      onMouseEnter={handleMouseEnter} // Usar CSS
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
      <Link
        href={{
          pathname: '/characters',
          query: {
            name: data.name,
            gender: data.gender,
            status: data.status,
            origin: data.origin.name,
            location: data.location.name,
            image: data.image,
            species: data.species, // encontrar espécie no JSON
          },
        }}
      >
        <button className="card-button">Read More</button>
      </Link>
    </div>
  );
}

