# Rick and Morty Database
## Instruções para instalação
Primeiramente, no seu terminal, clone o repositório:

```git clone https://github.com/autotelico/rickandmorty-db```

Em seguida, instale as dependências necessárias para executar o projeto:

```npm install```

Por fim, execute o Next.js localmente no seu cliente:

```npm run dev```

Clique no link https://localhost:3000/ que aparecer no seu terminal, ou copie o link e insira no seu navegador. O site será exibido.

## Decisões de projeto
- O site terá design mobile-first, sabendo que [mais de 50% do tráfego de internet vem de dispositivos móveis](https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/).
- O site terá duas páginas: a **página principal** e a **página de detalhes do personagem**.
- O código inicia na página principal, renderizando os Cards com os dados fornecidos pela API.
- Cada Card possui informações iniciais sobre o personagem, com um botão interno que leva a outra página com informações mais detalhadas.
- A página detalhada do personagem deve retornar à página principal.

## Passo a passo seguido
- [x] Elaborar a página principal, desenvolvendo uma visão geral do site em celulares
- [x] Criar o componente Characters, que chama a API a ser consumida e, caso necessário, filtra o personagem (definido numa interface) procurado pelo usuário na barra de pesquisa
- [x] Criar o componente Cards, que consome a API chamada e cria os cards a serem exibidos na página principal
- [x] Colocar os personagens para serem exibidos na página principal
- [x] Expandir a responsividade da página principal para dispositivos maiores que celulares, como tablets, laptops pequenos, até telas grandes como computadores e televisões
- [x] Desenvolver a página de detalhes do personagem, que consome os searchParams enviados pelo Card selecionado e detalha o personagem numa route exclusiva dele.
- [x] Dar responsividade à pagina de detalhes do personagem.
