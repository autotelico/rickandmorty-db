const Catalogo = async () => {
    const APIdata = await pegarAPI()
  
    return (
      <div id="main-container">
        <h1>Characters</h1>
        <ul>
          {APIdata?.results.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Catalogo;

async function pegarAPI() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data
}