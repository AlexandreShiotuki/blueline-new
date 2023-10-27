window.onload = function() {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-btn");

    popup.style.display = "block";

    closeBtn.onclick = function() {
        popup.style.display = "none";
    };
};