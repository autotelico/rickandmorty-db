import Card from "./Card";

interface Character {
  id: number;
  name: string;
  image: string;
  location: { name: string };
  gender: string;
  status: string;
  origin: { name: string };
  species: string;
}

export default async function Characters({
  page,
  character,
}: {
  page: number;
  character: string;
}) {
  const data = await getData(page);
  const filteredChars = data.results.filter((char: Character) =>
    char.name.toLowerCase().includes(character.toLowerCase())
  );

  return (
    <>
      {character
        ? filteredChars.map((char: Character) => (
              <Card data={char} key={char.id} />
          ))
        : data.results.map((char: Character) => (
              <Card data={char} key={char.id}/>
          ))}
    </>
  );
}

export const getData = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data = await response.json();
  return data;
};
