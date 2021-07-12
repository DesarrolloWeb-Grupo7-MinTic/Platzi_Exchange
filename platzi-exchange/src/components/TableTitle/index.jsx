import React, { useState } from "react";
import "./style.css";

function TableTitle({ onChange, value }) {
  const [state, setState] = useState({ text: "" });

  function handleChange(event) {
    onChange(event.target.value);
  }
  
  return (
    <>
      <p></p>
      <p>Ranking</p>
      <p>Nombre</p>
      <p>Precio</p>
      <p>Cap. de Mercado</p>
      <p>Variacion 24hs</p>
      <input
        type='text'
        placeholder='Buscar...'
        className='input_buscar'
        onChange={handleChange}
        value={value}
      />
    </>
  );
}

export default TableTitle;
