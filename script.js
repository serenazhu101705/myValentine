document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("bg-music");
  var playButton = document.getElementById("play-music-btn");

  if (audio) {
    var savedTime = sessionStorage.getItem("musicTime");
    if (savedTime) {
      audio.currentTime = parseFloat(savedTime);
    }

    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        playButton.style.display = "block";
      });
    }

    setInterval(function () {
      sessionStorage.setItem("musicTime", audio.currentTime);
    }, 1000);
  }
});

function startMusic() {
  var audio = document.getElementById("bg-music");
  if (audio) {
    audio.play();
    document.getElementById("play-music-btn").style.display = "none";
  }
}

window.addEventListener("beforeunload", function () {
  if (!document.referrer.includes(window.location.origin)) {
    sessionStorage.removeItem("musicTime");
  }
});

// Function to check the password before allowing access to letter.html
function checkPassword() {
  var correctPassword = "swiftie"; // Change this to your actual password
  var userInput = prompt("Enter the secret password to open the letter:");

  if (userInput === correctPassword) {
    window.location.href = "letter.html";
  } else {
    alert("Incorrect password! Try again. 💖");
  }
}

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
