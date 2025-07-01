import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Components/pages/Index' // <- Importando sua página
import './index.css' // <- Importando o CSS que criaremos

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)