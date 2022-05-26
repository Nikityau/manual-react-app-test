import './style.css'
import {App} from "./components/App/App";

const render = (el) => {
    const root = document.getElementById('root')
    root.classList.add('container')
    root.appendChild(el)
}

render(App())