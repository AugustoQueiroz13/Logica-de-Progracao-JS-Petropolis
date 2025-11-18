import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Dados from './components/Dados.jsx'
import App3 from './App3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dados />
    <App3 />
  </StrictMode>,
)
