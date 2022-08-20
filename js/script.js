const grid = document.querySelector(".grid");
var gridElement = document.querySelectorAll(".gridElement");
var slider = document.getElementById("myRange");
var colorPicker = document.getElementById("colorPicker");
var pen = document.getElementById("pen");
var eraser = document.getElementById("eraser");
var clear = document.getElementById("clear");
var rainbow = document.getElementById("rainbow");
var shadow = document.getElementById("shadow");
var selectedColor = "black";

function createGrid(){
    dimensions = getDimensions();
    heightGrid = Math.floor((dimensions[0])/1.4);
    heightGrid = Math.floor(Math.sqrt(heightGrid))**2;
    widthGrid = Math.floor((dimensions[1])/1.4);
    widthGrid = Math.floor(Math.sqrt(widthGrid))**2;
    gridElementSize = Math.sqrt(heightGrid);
    pixelCount = slider.value;
    if(pixelCount == 3){
        pixelCount = 4;
    }
    console.log(heightGrid,widthGrid);
    console.log(pixelCount);

    grid.style.height = `${heightGrid}px`;
    grid.style.width = `${heightGrid}px`;
    grid.style.gridTemplateRow = `repeat(${gridElementSize*pixelCount}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${gridElementSize*pixelCount}, 1fr)`;

    for(var i=0; i<(gridElementSize*pixelCount)**2; i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");
        gridElement.style.height = `${gridElementSize/pixelCount}px`;
        gridElement.style.width = `${gridElementSize/pixelCount}px`;
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

slider.oninput = function(){
        var child = grid.lastElementChild;
    while(child){
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
    createGrid();
}

colorPicker.oninput = function(){
    selectedColor = this.value;
}
colorPicker.onchange = function(){
    selectedColor = this.value;
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
pen.addEventListener('click', penFunction);
eraser.addEventListener('click', eraserFunction);
clear.addEventListener('click', clearFunction);
rainbow.addEventListener('click', rainbowFunction);
shadow.addEventListener('click', shadowFunction);
var rainbowColor = 0;

function penFunction(){
    grid.removeAttribute('id');
    grid.id = "penGrid";
    selectedColor = selectColor();
    rainbowColor = 0;
}
function eraserFunction(){
    grid.removeAttribute('id');
    grid.id = "eraserGrid";
    selectedColor = "white";
    rainbowColor = 0;
}
function clearFunction(){
    gridElement.forEach((gridElements) => {
        gridElements.style.backgroundColor = "white";
});
}
function rainbowFunction(){
    grid.removeAttribute('id');
    grid.id = "rainbowGrid";
    rainbowColor = 1;
}
function shadowFunction(){
    grid.removeAttribute('id');
    grid.id = "shadowGrid";
}

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
function color(){
    if(rainbowColor == 1){
        this.style.backgroundColor = getRandomColor();
    }else{
        this.style.backgroundColor = selectedColor;
    }
}

function selectColor(){
    selectedColor = colorPicker.value;
    return selectedColor;
}

function getRandomColor(){
    var hex = '0123456789ABCDEF';
    var hexCode = '#';
    for (var i = 0; i < 6; i++){
        hexCode += hex[Math.floor(Math.random()*16)];
    }
    return hexCode;
}




