document.addEventListener("DOMContentLoaded", function () {
    document.title = "Scribble";

    const footerItems = document.querySelectorAll(".footer-item");
    footerItems.forEach(item => {
        item.remove();
    });
    const footer = document.querySelector("footer");
    footer.innerHTML += `<a class="footer-item" href="https://github.com/ItzYanick/scribble" target="_blank">Source code</a>`;
    footer.innerHTML += `<a class="footer-item" href="https://yanick.gay" target="_blank">hosted by yanick.gay</a>`;

    const colorPicker = document.getElementById("color-picker");
    if(colorPicker != null) {
        colorPicker.value = "#ffffff";
    }

    if(clear != null) {
        clear = (context) => {
            context.fillStyle = "#000";
            context.fillRect(0, 0, drawingBoard.width, drawingBoard.height);
        }
    }
});
