// Your code here.
const cubes = document.querySelectorAll('.cube');
let isDragging = false;
let currentCube = null;
let offsetX, offsetY;

cubes.forEach(cube => {
    cube.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentCube = cube;
        offsetX = e.clientX - cube.getBoundingClientRect().left;
        offsetY = e.clientY - cube.getBoundingClientRect().top;
    });
});

document.addEventListener('mousemove', (e) => {
    if (isDragging && currentCube) {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();

        // Calculate new position
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Restrict to container bounds
        if (newX < containerRect.left) newX = containerRect.left;
        if (newX + currentCube.offsetWidth > containerRect.right) newX = containerRect.right - currentCube.offsetWidth;
        if (newY < containerRect.top) newY = containerRect.top;
        if (newY + currentCube.offsetHeight > containerRect.bottom) newY = containerRect.bottom - currentCube.offsetHeight;

        currentCube.style.position = 'absolute';
        currentCube.style.left = `${newX}px`;
        currentCube.style.top = `${newY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    currentCube = null;
});