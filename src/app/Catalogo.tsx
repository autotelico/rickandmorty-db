import { GetServerSideProps } from 'next';

const Catalogo = async ({ data }) => {
    console.log(data)

    return (
        <div id="main-container">
            <h1>Characters</h1>
            <ul>
                {data?.results.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
}


export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    console.log(data)
    return {
        props: {
            data: data
        }
    }
}

export default Catalogo