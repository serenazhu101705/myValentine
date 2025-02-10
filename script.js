document.getElementById("noButton").addEventListener("mouseenter", function() {
    this.style.transform = "translateX(100px)";
});

document.getElementById("noButton").addEventListener("mouseleave", function() {
    this.style.transform = "translateX(0)";
});

function goToSecondPage() {
    window.location.href = "yes.html";
}
