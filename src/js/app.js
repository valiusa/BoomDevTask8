//import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    let elements = document.querySelectorAll("p.hot");

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = elements[i].innerHTML + " 🔥";
    }
});
