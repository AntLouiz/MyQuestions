import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './components/AppRouter.js'

let appRoot = document.getElementById("app");

ReactDOM.render(<AppRouter />, appRoot);
