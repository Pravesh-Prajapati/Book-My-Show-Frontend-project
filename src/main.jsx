import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import SearchContextProvider from './context/Searchcontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchContextProvider>
    <App />
    </SearchContextProvider>
   
  </StrictMode>,
)
