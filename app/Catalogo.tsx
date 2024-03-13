// O Catalogo é o componente principal da aplicação e usa SSR
// para renderizar seu conteúdo. Logo, tudo aqui vai
// renderizar no servidor, não no cliente.
'use client'

import Carta from "./Carta";
import { useState } from 'react';

const Catalogo = ({children}) => {

  return (
    <div id="main-container">
      <h1>Characters</h1>
      <div id="character-list">
        {children}
      </div>
    </div>
  );
};

export default Catalogo;
