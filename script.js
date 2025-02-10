// Moves the "No" button to a new random position within the button container.
function moveNoButton() {
  const noButton = document.getElementById("no-btn");
  const container = document.querySelector(".button-container");
  
  // Get dimensions of the container and the button.
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  
  // Ensure the button stays fully inside the container.
  const maxX = containerWidth - buttonWidth;
  const maxY = containerHeight - buttonHeight;
  
  // Get random coordinates within the allowed range.
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  // Set the new position.
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Redirects to the Yes page.
function goToYesPage() {
  window.location.href = "yes.html";
}
