import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components  Code
// import './index.css'
// import App from './App.jsx'

// QR Code Genarate Code
import QRCode from './QRCode-generater/index.jsx'
import './QRCode-generater/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <QRCode></QRCode>
  </StrictMode>,
)
