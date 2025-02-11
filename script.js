document.addEventListener("DOMContentLoaded", function () {
  // For continuous background music: restore saved time and save every second.
  var audio = document.getElementById("bg-music");
  if (audio) {
    var savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
      audio.currentTime = parseFloat(savedTime);
    }
    setInterval(function () {
      localStorage.setItem("musicTime", audio.currentTime);
    }, 1000);
  }
});

// Moves the "No" button to a random position anywhere on the screen.
function moveNoButton() {
  var noButton = document.getElementById("no-btn");

  // If the button is still inside its initial container, remove it and append to the body.
  if (noButton.parentElement !== document.body) {
    document.body.appendChild(noButton);
    // Set its positioning to fixed so it’s relative to the viewport.
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
