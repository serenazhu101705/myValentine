// Moves the "No" button to a random position within its container.
function moveNoButton() {
  const noButton = document.getElementById("no-btn");
  const container = document.querySelector(".button-container");
  
  // Get container and button dimensions.
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  
  // Calculate maximum left and top values so the button remains fully inside.
  const maxX = containerWidth - buttonWidth;
  const maxY = containerHeight - buttonHeight;
  
  // Generate random positions.
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  // Set new position for the "No" button.
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Redirects to the "Yes" page.
function goToYesPage() {
  window.location.href = "yes.html";
}
