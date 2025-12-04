const RenderCanvas = document.querySelector("#RenderingCanvas");

function display(...opts) {


    requestAnimationFrame(display);
}

window.addEventListener("DOMContentLoaded", display);
