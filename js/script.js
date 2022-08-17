const grid = document.querySelector(".grid");

var size = 16;

for(var i=0; i<size; i++){
    for(var j=0; j<size; j++){
        const row = document.createElement("div");
        row.classList.add("row")
        row.style.backgroundColor = "white";
        row.style.height = "40px";
        row.style.width = "40px";
        row.style.boxSizing = "border-box";
        grid.appendChild(row);
    }
}

const rows = document.querySelectorAll(".row");
console.log(MouseEvent);

grid.addEventListener('mousedown', (e) => {
    rows.forEach((item) => {
            item.addEventListener('mouseenter', (e) => {
                    e.target.style.backgroundColor = "black";
            });
    });
});
grid.addEventListener('mouseup', (e) => {
    rows.forEach((item) => {
        item.removeEventListener('mouseenter');
});
})
