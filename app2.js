
// set up heat element object; 
var heatElement {
    temp:0,
    redSwitch:true,
    greenSwitch:false,
    blueSwitch:false,
    redValue:0,
    greenValue:0,
    blueValue:0,
    gridPosition:"",
    userSelected:false
    }   

// initialize grid data array
var gridData = [];

// get html elements for grid view
var gridView = getElementsByClassName("element");

// get number of elements in grid 
var gridSize = gridView.length;

// initialize individual element objects
for (let x=0;x<=gridSize;x++){
gridData[x] = new heatElement;
}
// select element event
function selectEvent (index){
    gridData[index].temp = +1;
    if (gridData[index].redValue < 255){
        gridData[index].redSwitch = true;
        gridData[index].redValue = +1;
    } else {gridData[index].redSwitch = false;}
    if (gridData[index].redSwitch = false){
        if (gridData[index].greenValue < 255){
            gridData[index].greenSwitch = true;
            gridData[index].greenValue = +1;}
            else {gridData[index].greenSwitch = false;}
    if(gridData[index].greenSwitch = false){
        
    }


    }
}

// de-select element event
function unselectEvent (index){}

// cycle grid and update grid data
function gridCycle (index){}

// update grid view based on new grid data
function updateView (theData,theView){}

// detect selected grid element and perform appropriate actions
function setEvents (theGrid){}

//  detect selectedheated node change color to yellow 
for (let i=0; i<= gridSize){
    gridView[i].addEventListener("mouseover",selectEvent(i);
    gridview[i].addEventListener("mouseout",unselectEvent(i);
}

setInterval(gridCycle,10000);
