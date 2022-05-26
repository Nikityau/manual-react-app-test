import './textfield.css'

export const TextField = (text) => {
    const div = document.createElement('div')
    div.innerHTML = text;
    div.classList.add('text-field')
    return div;
}