

export const Hello = (who) => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1')

    div.innerHTML = `Hello, ${who}!!!`;

    return div;
}