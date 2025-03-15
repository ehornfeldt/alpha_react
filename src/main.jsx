import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PortalView from './Components/PortalView.jsx'
import AlphaView from './Components/AplhaView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <PortalView title="Login" logIn={true}/> */}
    <AlphaView />
  </StrictMode>,
)
