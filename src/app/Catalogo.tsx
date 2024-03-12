// O Catalogo é o componente principal da aplicação e usa SSR
// para renderizar seu conteúdo. Logo, tudo aqui vai 
// renderizar no servidor, não no cliente.

import Carta from './Carta'
import BarraDePesquisa from './BarraDePesquisa';

const Catalogo = async () => {
    
  const APIdata = await pegarAPI();

  return (
    <div id="main-container">
      <BarraDePesquisa />
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
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    // Muda o elemento h1 para mostrar a mensagem de erro
    const h1: HTMLHeadingElement = document.querySelector('h1')!
    h1.textContent = 'Rick, não conseguimos encontrar os personagens :('
    throw new Error(error)
  }
}

export default Catalogo;
