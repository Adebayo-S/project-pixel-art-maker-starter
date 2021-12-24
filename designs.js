// Select color input

let colorPicker = document.getElementById('colorPicker');
let color = colorPicker.value;
colorPicker.addEventListener('change', function(e){
    color = e.target.value;
});


// When size is submitted by the user, call makeGrid()

let table = document.getElementById('pixelCanvas');

const form = document.getElementById('sizePicker');
form.addEventListener('submit', makeGrid);

function changeColor(e){
    e.target.style.backgroundColor = color;
}



function makeGrid(event) {
    event.preventDefault();

    //reset grid to blank state
    table.innerHTML = '';

    // Select size input
    let innerWidth = document.getElementById('inputWidth').value;
    let innerHeight = document.getElementById('inputHeight').value;


    //create cells
    for(let i = 0; i < innerWidth; i++) {

        let row = document.createElement("tr");

        for (let j = 0; j < innerHeight; j++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    let cells = document.querySelectorAll("td");

    //color grid pixels onClick
    cells.forEach(function (cell) {
        cell.addEventListener("click", changeColor);
    });

}











