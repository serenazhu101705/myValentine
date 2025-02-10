// Moves the "No" button to a random position anywhere on the screen.
function moveNoButton() {
  const noButton = document.getElementById("no-btn");
  
  // Change its positioning to fixed (if not already) so it can move anywhere in the viewport.
  if (getComputedStyle(noButton).position !== "fixed") {
    noButton.style.position = "fixed";
  }
  
  // Get viewport dimensions.
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  
  // Calculate the maximum left and top values so the button remains fully visible.
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
