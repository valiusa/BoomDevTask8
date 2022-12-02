//import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    let hotElements = document.getElementsByClassName("hot");

    for (let i = 0; i < hotElements.length; i++) {
        hotElements[i].innerHTML = hotElements[i].innerHTML + " 🔥";
    }
});
