import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { App } from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
