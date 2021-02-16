const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const container = document.querySelector('.container')

button.addEventListener('click', () => {
    const newColor = makeRandColor();
    container.style.backgroundColor = newColor;
    h1.innerText = newColor;
    h1.style.color = 'white';
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}



