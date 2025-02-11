document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("bg-music");

  if (audio) {
    // Check if there's a saved playback time
    var savedTime = sessionStorage.getItem("musicTime");
    if (savedTime) {
      audio.currentTime = parseFloat(savedTime);
    }

    // Autoplay music
    audio.play().catch(error => console.log("Autoplay failed:", error));

    // Save the current time every second
    setInterval(function () {
      sessionStorage.setItem("musicTime", audio.currentTime);
    }, 1000);
  }
});

// Ensure the music resets when the user exits the website
window.addEventListener("beforeunload", function () {
  if (!document.referrer.includes(window.location.origin)) {
    sessionStorage.removeItem("musicTime"); // Clear stored time if leaving the site
  }
});

// Moves the "No" button to a random position anywhere on the screen after hovering
function moveNoButton() {
  var noButton = document.getElementById("no-btn");

  if (noButton.style.position !== "fixed") {
    noButton.style.position = "fixed";
  }

  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  var buttonWidth = noButton.offsetWidth;
  var buttonHeight = noButton.offsetHeight;

  var maxX = viewportWidth - buttonWidth;
  var maxY = viewportHeight - buttonHeight;

  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}

// Redirects to the "Yes" page.
function goToYesPage() {
  window.location.href = "yes.html";
}
