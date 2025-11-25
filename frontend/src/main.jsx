import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserProvider.jsx';
import CaptainProvider from './context/CaptainProvider.jsx';
import SocketProvider from './context/SocketContext.jsx';
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(

  <CaptainProvider>
    <UserProvider>
      <SocketProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SocketProvider>
    </UserProvider>
  </CaptainProvider>

)
