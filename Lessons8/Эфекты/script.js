const button = document.getElementById('randomButton');

button.style.position = 'absolute';
button.style.top = '50%';
button.style.left = '50%';
button.style.transform = 'translate(-50%, -50%)';
button.style.padding = '20px';
button.style.fontSize = '16px';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.transition = 'transform 0.3s';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = getRandomColor();
});

button.addEventListener('mouseleave', () => {
    const randomRotation = Math.floor(Math.random() * 361) - 180; // Угол от -180 до 180
    button.style.transform = `rotate(${randomRotation}deg)`;
});
