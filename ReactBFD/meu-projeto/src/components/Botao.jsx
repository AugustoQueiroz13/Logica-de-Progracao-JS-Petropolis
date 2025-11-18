import React from 'react'

export function Botao() {
return (
    <>
        <p>Este é um botão</p>
        <button onClick={() => alert("Cliquei botão!")}>Clique Aqui</button>
    </>
)
}

export default Botao