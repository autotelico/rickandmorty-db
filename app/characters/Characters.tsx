import { useSearchParams } from "next/navigation";
import { ReactHTMLElement, useState } from "react";
import Carta from "../Carta";

export default async function Characters({ page, character }) {
  const data = await getData(page);
  const filteredData = data.results.filter((char) =>
    char.name.includes(character)
  );

  return (
    <>
      {character
        ? filteredData.map((char) => (
            <>
              <Carta data={char} />
            </>
          ))
        : data.results.map((char) => (
            <>
              <Carta data={char} />
            </>
          ))}
    </>
  );
}

export const getData = async (page) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
