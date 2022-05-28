import img_class from './image.module.scss'

export const Image = (img: string) => {
    console.log(img)
    const _img = document.createElement('img');
    _img.classList.add(img_class.img)
    _img.src = img

    return _img
}