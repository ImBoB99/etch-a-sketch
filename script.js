const container = document.querySelector(".container");


for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

function hoverPaint(e) {
    e.target.classList.add("paint");
}

const squares = document.querySelectorAll(".square");

squares.forEach(square => square.addEventListener("mouseover", hoverPaint));