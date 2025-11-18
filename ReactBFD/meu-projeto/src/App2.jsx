import logoReact from "/src/assets/react.svg"
import {Dados} from "/components/Dados.jsx"

function App() {
  const mensagem = "Olá mundo!";
  let numero = 10;
  return (
    
    <main>
    <div>App</div>
    <h1> Título 1</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure omnis modi labore itaque in.</p>
    <button>Botão</button>
    <hr />
    <span>{mensagem}</span> 
    {numero}
    <img src="vite.svg" alt="logo vite"/>
    < img src={logoReact} alt="logo react"/>
    </main>
  )
}

export default App

// JS => {}
// Nome de Propriedade ou método => Convenção CamelCase
// Arquivo dentro da pasta "public" = arquivo comum => Passar o nome do arquivo
// pastas ou imagens dentro da pasta "src" => precisa ser importado para utilizar
