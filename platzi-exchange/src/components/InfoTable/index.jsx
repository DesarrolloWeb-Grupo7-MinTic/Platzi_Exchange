import React from "react";

function InfoTable({
  ranking,
  current_price,
  low_price,
  high_price,

  variation_24,
}) {
  return (
    <>
      <p>RANKING</p>
      <p className='align-right'> {ranking} </p>
      <p>Precio Actual</p>
      <p className='align-right'> $ {current_price}</p>
      <p>Precio Mas Bajo</p>
      <p className='align-right'>$ {low_price}</p>
      <p>Precio Mas Alto</p>
      <p className='align-right'>$ {high_price}</p>
      <p>Variacion 24HS</p>
      <p className='align-right'>%{variation_24}</p>
    </>
  );
}

export default InfoTable;
