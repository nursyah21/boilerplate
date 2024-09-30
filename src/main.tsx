import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/Index.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
