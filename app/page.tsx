// Página principal

"use client";
import { Suspense, useState } from "react";
import Characters from "./characters/Characters";
import Catalogo from "./Catalogo";

export default function Page({ children }) {
  const [page, setPage] = useState(1);
  const [character, setCharacter] = useState("");

  function loadPreviousPage() {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }

  function loadNextPage() {
    if (page < 42)
    setPage((prevPage) => prevPage + 1);
  }

  function handleChange(e) {
    setCharacter(e.target.value);
  }

  return (
    <>
      <div id="main-container">
      <h1>Characters</h1>
      <input type="text" id="search-bar" onChange={handleChange} />
        <button className="page-button" onClick={loadPreviousPage}>Previous Page</button>
        <button className="page-button" onClick={loadNextPage}>Next Page</button>
      <div id="character-list">
        <h3>Página {page}/42</h3>
        <Suspense fallback={<p style={{ fontSize: "32px" }}>Loading...</p>}>
          <Characters page={page} character={character} />
        </Suspense>
        <button className="page-button" onClick={loadPreviousPage}>
          Previous Page
        </button>
        <button className="page-button" onClick={loadNextPage}>
          Next Page
        </button>
      </div>
    </div>
    </>
  );
}
