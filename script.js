document.addEventListener("DOMContentLoaded", function () {
  // Select the audio element
  var audio = document.getElementById("bg-music");

  if (audio) {
    // Autoplay the music when the page loads
    audio.play().catch(error => console.log("Autoplay failed:", error));
  }

  // Ensure the No button starts next to the Yes button
  var noButton = document.getElementById("no-btn");
  var yesButton = document.getElementById("yes-btn");

  if (noButton && yesButton) {
    // Position the "No" button next to the "Yes" button
    noButton.style.position = "relative";
    noButton.style.left = "10px"; // Adjust the spacing between buttons
    noButton.style.top = "0"; // Ensure it stays aligned
  }
});

// Moves the "No" button to a random position anywhere on the screen after hovering
function moveNoButton() {
  var noButton = document.getElementById("no-btn");

  // Only move the button if it has already been positioned correctly
  if (noButton.style.position !== "fixed") {
    noButton.style.position = "fixed";
  }

  // Get viewport dimensions.
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  var buttonWidth = noButton.offsetWidth;
  var buttonHeight = noButton.offsetHeight;

  // Calculate maximum left and top values so the button remains fully visible.
  var maxX = viewportWidth - buttonWidth;
  var maxY = viewportHeight - buttonHeight;

  // Generate random coordinates.
  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  // Set the new position.
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}

// Redirects to the "Yes" page.
function goToYesPage() {
  window.location.href = "yes.html";
}
