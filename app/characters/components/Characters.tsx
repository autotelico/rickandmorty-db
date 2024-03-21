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
  const data = character ? await getCharacter(character) : await getData(page);

  return (
    <>
      {data.results.map((char: Character) => (
        <Card data={char} key={char.name} />
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

const getCharacter = async (name: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
