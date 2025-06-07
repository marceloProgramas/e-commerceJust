import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Global from './style/Global.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global/>
    <App />
  </StrictMode>,
)
