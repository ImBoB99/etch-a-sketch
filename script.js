const container = document.querySelector(".container");
const gridDimensions = 800;
let squareDimensions = 0;

let randomR, randomG, randomB;

function randomizeColor() {
    randomR = Math.floor(Math.random() * 256);
    randomG = Math.floor(Math.random() * 256);
    randomB = Math.floor(Math.random() * 256);
}

function hoverPaint(e) {
    //e.target.classList.add("paint");
    randomizeColor();
    e.target.setAttribute("style", `width:${squareDimensions}px; height:${squareDimensions}px; background-color: rgb(${randomR}, ${randomG}, ${randomB});`);
}

function gridSize() {
    let squaresPerSide = prompt("Enter grid size");
    // convert string to number
    squaresPerSide = parseInt(squaresPerSide);

    if (isNaN(squaresPerSide) || squaresPerSide < 0 || squaresPerSide > 100) {
        alert("Please enter a valid number between 1 and 100");
        squaresPerSide = 16;
    }
    setGrid(squaresPerSide);
}

function setGrid(squaresPerSide = 16) {
    container.innerHTML = "";
    for (let i = 0; i < (squaresPerSide**2); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        squareDimensions = gridDimensions / squaresPerSide;
        square.setAttribute("style", `width:${squareDimensions}px; height:${squareDimensions}px;`)
        container.appendChild(square);
        squareEvents();
    }
}

function squareEvents () {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", hoverPaint));
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", gridSize);

setGrid();


