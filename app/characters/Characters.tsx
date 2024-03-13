import { useSearchParams } from "next/navigation";
import { ReactHTMLElement, useState } from "react";
import Carta from "../Carta";

export default async function Characters({ page, character }: {
    page: number, character: string
}) {
  const data = await getData(page);
  const filteredChars = data.results.filter((char) =>
    char.name.toLowerCase().includes(character.toLowerCase())
  );

  return (
    <>
      {character
        ? filteredChars.map((char) => (
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
