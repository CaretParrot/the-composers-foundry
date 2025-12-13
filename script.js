
let courseSelect = /** @type {HTMLSelectElement} */ (document.getElementById("courseSelect"));
let year = /** @type {HTMLSpanElement} */ (document.getElementById("year"));

window.onload = function () {
    year.innerHTML = String(new Date().getFullYear());
}

courseSelect.onchange = function () {
    window.location = /** @type {string & Location} */ (courseSelect.value);
}