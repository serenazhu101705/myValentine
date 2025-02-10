// Function to move the "No" button when hovered
function moveButton() {
  const noBtn = document.getElementById('noBtn');
  noBtn.style.position = 'relative';
  noBtn.style.left = Math.floor(Math.random() * 200) + 'px';  // Move button randomly
}

// Function to navigate to the yes page when "Yes" is clicked
function goToYesPage() {
  window.location.href = "yes.html"; // Redirect to the 'yes' page
}
