import img_class from './image.module.css'

export const Image = (img) => {
    console.log(img)
    const _img = document.createElement('img');
    _img.classList.add(img_class.img)
    _img.src = img

    return _img
}