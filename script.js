document.getElementById("noButton").addEventListener("mouseenter", function() {
    // Get random positions on the screen
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * window.innerHeight);

    // Move the "No" button to the random position
    this.style.left = randomX + "px";
    this.style.top = randomY + "px";
});

document.getElementById("noButton").addEventListener("mouseleave", function() {
    // Optionally reset the button position if you'd like when the mouse leaves
    this.style.left = "50%";
    this.style.top = "50%";
    this.style.transform = "translate(-50%, -50%)";
});

function goToSecondPage() {
    window.location.href = "yes.html";
}
