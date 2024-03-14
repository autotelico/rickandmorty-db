// Página principal

"use client";
import { ChangeEvent, Suspense, useState } from "react";
import Characters from "./characters/Characters";

export default function Page(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [character, setCharacter] = useState<string>("");
  // const [windowWidth, setWindowWidth] = useState<number>(window?.innerWidth);
  // to fix the window: https://stackoverflow.com/questions/75692116/next-js-13-window-is-not-defined
  const [showModal, setShowModal] = useState<boolean>(false);

  // window.addEventListener("resize", () => {
  //   setWindowWidth(window.innerWidth);
  // });

  if (typeof document !== 'undefined') {
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.textContent!.toLowerCase() === "Read More".toLowerCase()) {
          setShowModal(!showModal);
        }
      });
    });
  }

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
      {/* Se houver window, ele vai renderizar isto */}

      {typeof window !== 'undefined' && window.innerWidth > 1024 && (
        <>
          <header>
            <img
              id="main-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png"
              alt=""
            />{" "}
            <p id="dti-love">and dti s2💞✨✨✨</p>
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
      {showModal && (
        <>
          <div id="modal">
            <div id="character-info">
              <p>THIS IS A CHAR</p>
            </div>
          </div>
        </>
      )}
      <div id="main-container">
        <input
          type="text"
          id="search-bar"
          placeholder="Buscar personagem"
          onChange={handleChange}
        />
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
          {/* Aqui eu hardcodei a página limite, mas dá pra
          pegar a quantidade de páginas no JSON e colocar ela aqui */}
          <h3>Page {page}/42</h3>
        </div>
        <div id="character-list">
          <Suspense fallback={<p style={{ fontSize: "32px" }}>Loading...</p>}>
            <Characters page={page} character={character} />
          </Suspense>
        </div>
      </div>
      <button id="scroll-to-top-btn" onClick={() => typeof window !== 'undefined' && window.scrollTo(0, 0)}>
        Scroll to Top
      </button>
    </>
  );
}
