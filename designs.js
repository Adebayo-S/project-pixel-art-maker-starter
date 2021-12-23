// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const form = document.getElementById('sizePicker');
form.addEventListener('submit', makeGrid);


function makeGrid(e) {
    // Your code goes here!
    e.preventDefault();
    
    const status = document.getElementById('status');
    let table = document.getElementById('pixelCanvas');

    let innerWidth = document.getElementById('inputWidth').value;
    let innerHeight = document.getElementById('inputHeight').value;

    //if table is empty
    if (table.innerHTML === '') {
        //create cells
        for(let i = 0; i < innerWidth; i++) {
            
            let row = document.createElement("tr");

            for (let j = 0; j < innerHeight; j++) {
                let cell = document.createElement("td");
                row.appendChild(cell);
            }

            table.appendChild(row);
        }
        status.textContent = `Pixel Art Created! Time stamp: ${e.timeStamp}`

    } else (table.innerHTML = '');

}


