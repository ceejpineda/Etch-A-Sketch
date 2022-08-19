const grid = document.querySelector(".grid");
var gridElement = document.querySelectorAll(".gridElement");

function createGrid(){
    dimensions = getDimensions();
    heightGrid = Math.floor((dimensions[0])/1.5);
    heightGrid = Math.floor(Math.sqrt(heightGrid))**2;
    widthGrid = Math.floor((dimensions[1])/1.5);
    widthGrid = Math.floor(Math.sqrt(widthGrid))**2
    console.log(heightGrid,widthGrid);
    pixelSize = Math.sqrt(heightGrid);
    for(var i=0; i<pixelSize**2; i++){
        const gridElement = document.createElement("div");
        grid.style.height = `${heightGrid}px`;
        grid.style.width = `${heightGrid}px`;
        grid.style.gridTemplateRow = `repeat(${pixelSize}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
        gridElement.classList.add("gridElement");
        gridElement.style.height = `${pixelSize}px`;
        gridElement.style.width = `${pixelSize}px`;
        gridElement.style.boxSizing = "border-box";
        grid.appendChild(gridElement);
    }
    window.addEventListener('resize', resizeGrid);
    gridElement = document.querySelectorAll(".gridElement");
}

function getDimensions(){
    var height = window.innerHeight;
    var width = window.innerWidth;
    width = Math.ceil(width);
    height = Math.ceil(height);
    var size = Math.min(height,width);
    console.log(height,width,size);
    return [height, width, size];
}


function resizeGrid(){
    var child = grid.lastElementChild;
    while(child){
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
    createGrid();
}    

createGrid();

grid.addEventListener('mousedown', draw, false);
grid.addEventListener('mouseup', stopDraw);

function draw(){
    gridElement.forEach((gridElements) => {
        gridElements.addEventListener('mouseenter', color);
        gridElements.addEventListener('mouseover', color);
        gridElements.addEventListener('mousemove',color)
});
}

function stopDraw(){
    gridElement.forEach((gridElements) => {
        gridElements.removeEventListener('mouseenter', color);
        gridElements.removeEventListener('mouseover', color);
        gridElements.removeEventListener('mousemove', color);
});
}
var selectedColor = "black";
function color(){
    this.classList.add("colored");
    this.style.backgroundColor = selectedColor;
}


const eraser = document.querySelector("#erase");
const colorSelector = document.querySelector("#colorSelector");

eraser.addEventListener('click', erase);
colorSelector.addEventListener('click', selectColor);

function erase(){
    gridElement.forEach((gridElements) => {
        gridElements.style.backgroundColor = "white";
});
}

function selectColor(){
    selectedColor = "blue";
}




