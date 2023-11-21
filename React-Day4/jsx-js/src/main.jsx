import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Post from './Post'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Post/>
  </React.StrictMode>,
)

// const root = ReactDOM.createRoot(document.getElementById('root')); //Where to render
// root.render(<App />); //What to render
