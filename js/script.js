const grid = document.querySelector(".grid");

var size = 32;

var height = window.innerHeight;
var width = window.innerWidth;
width = Math.sqrt(width);
console.log(w,h);

for(var i=0; i<size; i++){
    for(var j=0; j<size; j++){
        const row = document.createElement("div");
        grid.style.gridTemplateRow = "repeat(32, 1fr)";
        grid.style.gridTemplateColumns = "repeat(32, 1fr)"
        row.classList.add("row")
        row.style.height = "20px";
        row.style.width = "20px";
        row.style.boxSizing = "border-box";
        grid.appendChild(row);
    }
}

const rows = document.querySelectorAll(".row");
console.log(MouseEvent);

grid.addEventListener('mousedown', draw, false);
grid.addEventListener('mouseup', stopDraw);

function draw(){
    rows.forEach((item) => {
        item.addEventListener('mouseenter', color);
        item.addEventListener('mouseover', color);
        item.addEventListener('mousemove',color)
});
}

function stopDraw(){
    rows.forEach((item) => {
        item.removeEventListener('mouseenter', color);
        item.removeEventListener('mouseover', color);
        item.removeEventListener('mousemove', color);
});
}
var selectedColor = "black";
function color(){
   this.style.backgroundColor = selectedColor;
}


const eraser = document.querySelector("#erase");
const colorSelector = document.querySelector("#colorSelector");

eraser.addEventListener('click', erase);
colorSelector.addEventListener('click', selectColor);

function erase(){
    rows.forEach((item) => {
        item.style.backgroundColor = "white";
});
}

function selectColor(){
    selectedColor = "blue";
}




