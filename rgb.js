 var theGrid = document.getElementsByClassName("gridElement");

var gridSize = theGrid.length;

var colorThat = function (x, red, green , blue , grid){
    grid[x].style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

var randomColors = function () {
for (x = 0 ; x < gridSize ; x++){
let red = Math.floor(Math.random()*255);
let green = Math.floor(Math.random()*255);
let blue = Math.floor(Math.random()*255);   
console.log(red,green,blue);
colorThat(x,red,green,blue,theGrid);
}
}
// setInterval (function(){randomColors()},1000);


function HeatElement(red,green,blue,selected,rep){
    this.redValue = red;
    this.greenValue = green;
    this.blueValue = blue;
    this.isSelected = selected;
    this.screenrep = rep;
}
// set up data/objects for the the grid
gridData = [];
for (index = 0; index <= 99; index++){
    gridData[index] = new HeatElement(0,0,0,false,theGrid[index]);
}
console.log(gridData);

function setEvents (){
    // sets up event listeners
}

function getColor (){
    // takes temperarture and returns color
}

function getAvergae (){
    // uses elements posistion to get avergae temperature based on surrrounding elements
    // top left corner index = 0
    // top edge index > 0 and < 9
    // top right corner index = 9
    // right edge index is a multiple of 9
    // bottom right corner idex = 99
    // bottom edge index > 90 and < 99
    // bottom left corner index = 90
    // inner elements (fails all other conditions)
}

function cycleGrid (){
    // goes throught the grid and updates cololrs and temps
    // if selected add 1
    // if not selected get average
}

function upddateGrid (){
    // paints the grid
}

function mainLogic () {
    upddateGrid();
    cycleGrid();
}

setEvents();
setInterval(function(){mainLogic},1000);
