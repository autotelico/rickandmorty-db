// Página principal

"use client";
import { ChangeEvent, Suspense, useState } from "react";
import Characters from "./characters/Characters";

export default function Page(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [character, setCharacter] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth); 
  });

  function loadPreviousPage(): void {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }

  function loadNextPage(): void {
    if (page < 42) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setCharacter(e.target.value);
  }

  return (
    <>
      {windowWidth > 1024 && (
        <>
          <header>
            <img
              id="main-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png"
              alt=""
            />
          </header>
          <div id="hero">
            <div id="hero-text">
              <h2>Filtro de Personagens</h2>
              <h4 style={{ fontWeight: "normal" }}>
                Confira os principais dados dos personagens de Rick and Morty,
                como seu nome, seu status, e muito mais abaixo!
              </h4>
            </div>
          </div>
        </>
      )}
      <div id="search-div">
        <input
          type="text"
          id="search-bar"
          placeholder="Buscar personagem"
          onChange={handleChange}
        />
      </div>
      <div id="main-container">
        <h1>Characters</h1>
        <div className="centralize">
          <button
            className="page-button btn btn-blue bg-blue-500"
            onClick={loadPreviousPage}
          >
            Previous Page
          </button>
          <button className="page-button" onClick={loadNextPage}>
            Next Page
          </button>
          {/* Aqui eu hardcodei a página limite, mas é possível
          pegar a quantidade de páginas no JSON e colocá-la aqui */}
          <h3>Page {page}/42</h3>
        </div>
        <div id="character-list">
          <Suspense fallback={<p style={{ fontSize: "32px" }}>Loading...</p>}>
            <Characters page={page} character={character} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
