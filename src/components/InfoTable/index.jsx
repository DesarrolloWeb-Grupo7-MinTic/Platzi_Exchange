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
      <p className='bold' > Ranking</p>
      <p className='align-right'> {ranking} </p>
      <p className='bold'>Precio Actual</p>
      <p className='align-right'> $ {current_price}</p>
      <p className='bold'>Precio Mas Bajo</p>
      <p className='align-right'>$ {low_price}</p>
      <p className='bold'>Precio Mas Alto</p>
      <p className='align-right'>$ {high_price}</p>
      <p className='bold'>Variacion 24HS</p>
      <p className='align-right'>{variation_24}%</p>
    </>
  );
}

export default InfoTable;
