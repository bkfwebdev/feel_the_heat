// get grid elements
var gridView = document.getElementsByClassName("element");
// define functions
// element factory
var heatElement = function (temp,redValue,greenValue,blueValue,userSelected){
    this.temp = temp;
    this.redValue = redValue;
    this.greenValue = greenValue;
    this.userSelected = userSelected;
}
// cool grid
// spread heat
// selectvevent
// deselectevent
// set event listeners
function setEvents(){
    for (let i = 0; i < gridSize; i++){
    
       gridView[i].addEventListener("mouseover", function() {gridView[i].style.backgroundColor = "red"});
       gridView[i].addEventListener("mouseout", function() {gridView[i].style.backgroundColor = "black"});
   
       //gridView[i].addEventListener("mouseover",selectEvent(i));
       //gridView[i].addEventListener("mouseout",unselectEvent(i));
     }  
   }
// set up grid data
var gridSize = gridView.length;
for (let x=0;x<=gridSize;x++){
    gridData[x] = new heatElement(0,0,0,0,false);
    }
// on event simply set selected vs not selected in data
// cycle the grid
//      if selected add 1 to temperature
//      if not selected compute average
// cool grid every 5 seconds
// seperate data from view
// update view at end of each cycle
// cycle is continuous , mouse events change what happen during the cycle
