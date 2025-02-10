document.getElementById("yesBtn").addEventListener("click", function() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("congratulations").style.display = "block";
});

document.getElementById("noBtn").addEventListener("click", function() {
    const button = document.getElementById("noBtn");
    const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});
