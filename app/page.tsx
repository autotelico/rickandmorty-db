// Página principal
// Esta página renderiza os personagens e permite ver detalhes sobre
// cada um. Também é possível pesquisar personagens.

"use client";
import { ChangeEvent, Suspense, useState, useEffect } from "react";
import Characters from "./characters/components/Characters";
import "./styles/globals.css";

export default function Page(): JSX.Element {
  const [isClient, setIsClient] = useState<boolean>(false); // Verifica se tem window
  const [page, setPage] = useState<number>(1); // Página atual
  const [character, setCharacter] = useState<string>(""); // Personagem buscado

  useEffect(() => {
    setIsClient(true);
  }, []);

  function loadPreviousPage(): void {
      setPage((prevPage) => prevPage - 1);
  }

  function loadNextPage(): void {
      setPage((prevPage) => prevPage + 1);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setCharacter(e.target.value);
  }

  return (
    <>
      <header>
        <img
          id="main-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png"
          alt=""
        />{" "}
        <p id="dti-love">and dti s2💞✨✨✨</p>
      </header>
      {/* Se houver window, ele vai renderizar isto */}
          <div id="hero">
            <div id="hero-text">
              <h2>Filtro de Personagens</h2>
              <h4 style={{ fontWeight: "normal" }}>
                Confira os principais dados dos personagens de Rick and Morty,
                como seu nome, seu status, e muito mais abaixo!
              </h4>
            </div>
          </div>
      <div id="main-container">
        <input
          type="text"
          id="search-bar"
          placeholder="Buscar personagem"
          onChange={handleChange}
        />
        <h1>Characters</h1>
        <div className="centralize">
          {page > 1 ? <button
            className="page-button btn btn-blue bg-blue-500"
            onClick={loadPreviousPage}
          >
            Previous Page
          </button> : <button style={{backgroundColor: 'white', cursor: "default"}}></button>}
          {page < 42 ? <button className="page-button" onClick={loadNextPage}>
            Next Page
          </button> : <button style={{backgroundColor: 'white', cursor: "default"}}></button>}
          <h3>Page {page}/42</h3>
        </div>
        <div id="character-list">
          <Suspense fallback={<p style={{ fontSize: "32px" }}>Loading...</p>}>
            <Characters page={page} character={character} />
          </Suspense>
        </div>
      </div>
      {/* Botão extra pra voltar ao topo mais rápido */}
      <button
        id="scroll-to-top-btn"
        onClick={() => isClient && window.scrollTo(0, 0)}
      >
        Scroll to Top
      </button>
    </>
  );
}
