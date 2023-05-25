import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './paginas/home/Home'
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <Home/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);