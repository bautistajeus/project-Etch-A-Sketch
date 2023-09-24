//Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");



//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};



function defaultGrid(rowNum, cellNum) {
    makeRows(rowNum);
    makeColumns(cellNum);
}

const button = document.querySelector('button')

button.addEventListener('click', () => {
    let rowNum = prompt('Please enter the number of rows');
    let cellNum = prompt('Enter the number of columns');
    defaultGrid(rowNum, cellNum)
    
})



