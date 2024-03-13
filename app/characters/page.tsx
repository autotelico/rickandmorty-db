'use client';
import { Suspense, useState } from 'react';
import Characters from './Characters';

export default function Page({ children }) {
  const [page, setPage] = useState(1);
  const [character, setCharacter] = useState('')

  function handleClick() {
    setPage((prevPage) => prevPage + 1);
  }

  function handleChange(e) {
    setCharacter(e.target.value)
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>Character List:</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Characters page={page} character={character} />
      </Suspense>
      <button onClick={handleClick}>Next Page</button>
    </>
  );
}