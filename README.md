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
- Cada Card possui informações iniciais sobre o personagem, com um botão interno que leva à página de detalhes do personagem, passando os parâmetros de pesquisa necessários para exibir as informações. 
- A página detalhada do personagem deve retornar à página principal.
