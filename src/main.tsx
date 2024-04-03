import React from 'react'
import ReactDOM from 'react-dom/client'
import SignUpForm from './components/SignUpPage/SignUpForm'
// import App from './components/App/App.tsx'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <SignUpForm />
  </React.StrictMode>,
)
