import {Hello} from "../Hello/Hello";
import {TextField} from "../UI/TextField/TextField";
import {Image} from "../Image/Image";

import './app.css'
import app from './app.module.css'

import img from '../../assets/images/Sky_Zero_image01_RGB_2500_x_950.jpg'

const div = document.createElement('div')
div.classList.add(app.style)

export const App = (el) => {
    if(el) {
        div.appendChild(el)
    }

    return div;
}

App(Hello('text'))
App(TextField('text'))
App(Image(img));