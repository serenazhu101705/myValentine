document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    noButton.addEventListener('mouseover', function() {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener('click', function() {
        window.location.href = 'yes.html';
    });
});
