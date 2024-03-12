// O Catalogo é o componente principal da aplicação e usa SSR
// para renderizar seu conteúdo. Logo, tudo aqui vai 
// renderizar no servidor, não no cliente.

import { ReactElement } from "react";
import Carta from './Carta'

const Catalogo = async () => {
    
  const APIdata = await pegarAPI();

  return (
    <div id="main-container">
      <h1>Characters</h1>
      <div id="character-list">
        {/* Usa a API buscada */}
        {APIdata?.results.map((result) => (
          <Carta data={result} key={result.id} />
        ))}
      </div>
    </div>
  );
};

// Busca a API para usar no Catalogo
async function pegarAPI() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  console.log("data", data);
  return data;
}

export default Catalogo;
