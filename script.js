let noButton = document.getElementById("noButton");
let isMoving = false; // Flag to prevent oscillation

noButton.addEventListener("mouseenter", function() {
    if (isMoving) return; // Prevents the oscillation if it's already moving

    isMoving = true; // Set flag to true
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * window.innerHeight);

    // Move the "No" button to a random position
    this.style.left = randomX + "px";
    this.style.top = randomY + "px";
});

noButton.addEventListener("transitionend", function() {
    isMoving = false; // Reset the flag when the transition ends
});

function goToSecondPage() {
    window.location.href = "yes.html";
}
