import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import MyGlobalStyles from './styles/globalStyles'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

    <MyGlobalStyles />

    <App />

</BrowserRouter>
   

  </StrictMode>,
) 
