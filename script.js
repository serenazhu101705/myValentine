// Moves the "No" button to a random position anywhere on the screen.
function moveNoButton() {
  const noButton = document.getElementById("no-btn");
  
  // If the button is still inside its initial container, remove it and append to the body.
  if (noButton.parentElement !== document.body) {
    document.body.appendChild(noButton);
    // Set position to fixed so it’s positioned relative to the viewport.
    noButton.style.position = "fixed";
  }
  
  // Get viewport dimensions.
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  
  // Calculate maximum left and top values to keep the button fully visible.
  const maxX = viewportWidth - buttonWidth;
  const maxY = viewportHeight - buttonHeight;
  
  // Generate random coordinates.
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  // Set the new position.
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Redirects to the "Yes" page.
function goToYesPage() {
  window.location.href = "yes.html";
}
