import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './pages/App/App'
import Login from './pages/Login'
import SignUp from './pages/SignUp/index'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
    {/* <SignUp /> */}
  </React.StrictMode>,
)
