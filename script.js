let button = document.querySelector("button");
let clicked = false;
button.addEventListener("click", function() {
    let menue = document.querySelector(".mobile");
    if (clicked) {
        menue.style.maxHeight = "0";  /* Menü schließen */
        clicked = false;
    } else {
        menue.style.maxHeight = menue.scrollHeight + "px";  /* Menü öffnen. scrollHeight gibt die Höhe des Inhalts im Menü zurück. */
        clicked = true;
    }
});
