import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './components/AppRouter.js'
import { Provider } from 'react-redux'
import store from './store.js'

let appRoot = document.getElementById("app");


function render() {
    ReactDOM.render(
        <Provider store={store}><AppRouter/></Provider>,
        appRoot
    );
}

store.subscribe(render);

render();