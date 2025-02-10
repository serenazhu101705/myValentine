function moveNoButton() {
    const noButton = document.getElementById("no-btn");
    const container = document.querySelector(".container");
    
    const maxX = container.clientWidth - noButton.clientWidth;
    const maxY = container.clientHeight - noButton.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function goToYesPage() {
    window.location.href = "yes.html";
}
