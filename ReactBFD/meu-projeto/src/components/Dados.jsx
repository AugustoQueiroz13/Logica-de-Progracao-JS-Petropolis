import React from 'react';
import '../style.css';

export function Dados() {
  const tecnologia = "React";

  function soma(a, b) {
    return a + b;
  }
  
  return (
    <div className="bloco">
      <h1>{tecnologia} é incrível!</h1>
      <h2> 2 + 3 = {soma(2, 3)}  </h2>  
    </div>

  )
}
export default Dados