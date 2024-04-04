import React from 'react'
import ReactDOM from 'react-dom/client'
import SignUp from './pages/SignUp/index'
// import App from './components/App/App.tsx'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <SignUp />
  </React.StrictMode>,
)
