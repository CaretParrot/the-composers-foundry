let hue = 120;
let speed = 5;

window.onload = function () {
    id.setupTree();
    id.year.innerHTML = new Date().getFullYear();
}

setInterval(function () {
    hue += speed;
    document.documentElement.style.setProperty("--dark-1", `hsl(${hue}, 5%, 10%)`);
    document.documentElement.style.setProperty("--dark-2", `hsl(${hue}, 10%, 20%)`);
    document.documentElement.style.setProperty("--dark-3", `hsl(${hue}, 15%, 30%)`);
    document.documentElement.style.setProperty("--light-1", `hsl(${hue}, 45%, 90%)`);
    document.documentElement.style.setProperty("--light-2", `hsl(${hue}, 40%, 80%)`);
    document.documentElement.style.setProperty("--light-3", `hsl(${hue}, 35%, 70%)`);
    if (hue >= 150 || hue <= 120) {
        speed = -speed;
    }
}, 10000);