let noButton = document.getElementById("noButton");
let hasMoved = false; // Flag to ensure the button only moves once

noButton.addEventListener("mouseenter", function() {
    if (hasMoved) return; // Only allow movement if it hasn't moved yet

    // Set the flag to true to prevent further movement
    hasMoved = true;

    // Get random positions within the screen boundaries
    let randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    let randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

    // Move the "No" button to a random position
    this.style.left = randomX + "px";
    this.style.top = randomY + "px";
});

function goToSecondPage() {
    window.location.href = "yes.html";
}
