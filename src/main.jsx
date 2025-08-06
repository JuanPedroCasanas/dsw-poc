import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'
import Form from './components/Form/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form />
  </StrictMode>,
)
