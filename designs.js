// the project is done using JS , nothing being touched in HTML, OR css files 

// Defining variables, so we can refer to the HTML elements using the DOM 

// Defining the Height input 
let rowsButton = document.querySelector("#inputHeight");

// Definning the Width input 
let colsButton = document.querySelector("#inputWidth");

// Defining the form element , so we can access the submit button, because there is no id for submit button in the index page.
let form = document.getElementById("sizePicker");
let submitButton = form.lastElementChild;

// Defining the table , where thee canvas shows up.
let table = document.querySelector("#pixelCanvas");

// When clicking Submit button , function makeGrid will execute.

submitButton.addEventListener("click",function(event){ event.preventDefault(); makeGrid();});

// Function that creates dynamic table based on the Height & Width inputs by using
// for loops ,
// create <tr>, <td> elements ,
// then append the elements to the DOM 
function makeGrid() {
    table.innerHTML = "";
    let rows = rowsButton.value;
    let cols = colsButton.value; 
    let tbBody = document.createElement("tbody");
    for (var i= 1; i<= rows; i++){
        var row = document.createElement("tr");
        for (var j =1; j<= cols; j++){
         var cell = document.createElement("td");
         row.appendChild(cell);
        }
        tbBody.appendChild(row);
    }
    table.appendChild(tbBody);    
}
//Function based on EventListener , that color each cell when click on it 
// using event delegation , to make sure that specific <td> that was click , will be colored 
table.addEventListener("click",function(e){
    if(e.target.nodeName === "TD"){ 
        var currentCell = e.target;
         currentCell.style.backgroundColor = document.getElementById('colorPicker').value;
    }

});