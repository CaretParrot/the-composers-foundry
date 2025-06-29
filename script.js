id.setupTree();

window.onload = function () {
    id.setupTree();
    id.year.innerHTML = new Date().getFullYear();
}

id.courseSelect.onchange = function () {
    window.location = id.courseSelect.value;
}