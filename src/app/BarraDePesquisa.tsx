"use client";

import { FormEvent, useState } from "react";

export default function BarraDePesquisa() {
  const [inputVal, setInputVal] = useState("");

  function handleChange(e: FormEvent<HTMLInputElement>): void {
    setInputVal(e.target.value);
  }

  return (
    <>
      <input type="text" id='barra-de-pesquisa' onChange={handleChange} />
    </>
  );
}
