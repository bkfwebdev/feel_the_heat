"use strict";
// set up heat element object; 

var heatElement = function (temp,redValue,greenValue,blueValue,userSelected){
    this.temp = temp;
    this.redValue = redValue;
    this.greenValue = greenValue;
    this.userSelected = userSelected;
}

// initialize grid data array
var gridData = [];
// get html elements for grid view
var gridView = document.getElementsByClassName("element");
// get number of elements in grid 
var gridSize = gridView.length;
// initialize individual element objects
for (let x=0;x<=gridSize;x++){
gridData[x] = new heatElement(0,0,0,0,false);
}

function gridTest (){
    console.log("grid test start");
    var testRed = 0;
    var testGreen = 0;
    var testBlue = 0;
    for(var bigLoop=0; bigLoop<=765; bigLoop++){
        if (bigLoop<255){testRed +=1;}
        if (bigLoop>255 && bigLoop<=510){testGreen +=1;}
        if (bigLoop>510){testBlue +=1;}
        for (let index = 0; index <=99 ; index++){
        gridView.item(index).style.backgroundColor = "rgb("+testRed+","+testGreen+","+testBlue+")";
        console.log(testRed,testGreen,testBlue);
        // setInterval(function(){ console.log("change"); }, 10000);
        }
         
}
}
  

    
  

function updateView (){
    console.log("update view fired");
    for (let z = 0; z < gridSize; z++){
        gridView.item[z].style.backgroundColor = "rgb(" +  gridData[z].redValue + "," + gridData[z].greenValue + "," + gridData[z].blueValue + ")";
    }
}
// select element event
function selectEvent (index){
console.log("select event fired")
gridData[index].userSelected = true; 
if (gridData[index].temp < 255){
    gridData[index].redValue += 1; 
}
if (gridData[index].temp >= 255 && gridData[index].temp < 510){
    gridData[index].greenValue += 1;
}
if (gridData[index].temp >= 510 && gridData[index] < 765){
    gridData[index].blueValue += 1
}
 updateView(); 
}
// de-select element event
console.log("de-select event fired");
function unselectEvent (index){
    gridData[index].userSelected = false;
}
// cycle grid and update grid data
function heatCycle (){
    console.log("heat cycle fired");
    for (let j =0; j<100; j++){
      if (gridData[j].userSelected = false){  
        //top left corner
        if(j == 0)
            {
            gridData[j].temp = (gridData[j].temp + gridData[j+1].temp + gridData[j+10].temp + gridData[j+11])/4;  
            }
        
        //top edge
        if(j > 0 && j < 9)
            {
            gridData[j].temp = (gridData[j].Temperatue + gridData[j-1].Temperature + gridData[j+1].temp +gridData[j+9].temp + gridData[j+10].temp + gridData[j+11].temp)/6; 
            }
        
        //top right corner
        if(j == 9)
            {
            gridData[j].Temperature = (gridData[j].Temperature + gridData[j-1].Temperature + gridData[j+9].Temperature + gridData[j+10].Temperature)/4;
            }
        
        //right edge
        if (j % 10 == 9)
            {
            gridData[j].temp = (gridData[j].temp + gridData[j-1].temp + gridData[j-11].temp + gridData[j-10].temp + gridData[j+10].temp + gridData[j+9].temp)/6;
            }
        
        //bottom right corner
        if (j = 99)
            {
            gridData[j].temp = (gridData[j].temp + gridData[j-1].temp + gridData[j-11].temp + gridData[j-10].temp)/4
            }
        
        //bottom edge
        if (j > 90 && i < 99)
            {
            gridData[j].temp = (gridData[j] .temp + gridData[j-1].temp + gridData[j-11].temp + gridData[j-10].temp + gridData[j-9].temp + gridData[j+1].temp)/6;
            }
            
        //bottom left corner
        if (j == 90)
            {
            gridData[j].temp = (gridData[j].temp + gridData[j-10].temp + gridData[j-9].temp + gridData[j+1].temp)/4;
            }
            
        //left edge
        if (j  % 10 == 0)
            {
            gridData[j].nodeTemperatue = (gridData[j].temp + gridData[j+1].temp + gridData[j+11].temp + gridData[j+10].temp + gridData[j-10].temp + gridData[j-9].temp)/6;
            }
        
        //inside the grid
        if (j>= 11 && j<=99)
            {
            gridData[j].temp = (gridData[j].temp +gridData[j-1].temp + gridData[j-11].temp + gridData[j-10].temp + gridData[j-9].temp + gridData[j+1].temp + gridData[j+9].temp + gridData[j+10].temp + gridData[j+11].temp )/9
            }
            if (gridData[j].temp < 255){
                gridData[j].redValue += 1; 
            }
            if (gridData[j].temp >= 255 && gridData[j].temp < 510){
                gridData[j].greenValue += 1;
            }
            if (gridData[j].temp >= 510 && gridData[index] < 765){
                gridData[j].blueValue += 1
            }
        }
    }
    updateView();
}
// cool grid when no heat is being added
function coolCycle (){
for (let k=0; k< gridSize; k++){
    if (gridData[k].userSelected = false){
        gridData[k].temp += -1;
    }
}
updateView();
}
// update grid view based on new grid data

// detect selected grid element and perform appropriate actions
function setEvents(){
    for (let i = 0; i < gridSize; i++){
    
       gridView[i].addEventListener("mouseover", function() {gridView[i].style.backgroundColor = "red"});
       gridView[i].addEventListener("mouseout", function() {gridView[i].style.backgroundColor = "black"});
   
       //gridView[i].addEventListener("mouseover",selectEvent(i));
       //gridView[i].addEventListener("mouseout",unselectEvent(i));
     }  
   }
   
//grid start

setEvents();
gridTest();

// setInterval(heatCycle(),10000);
// setInterval(coolCycle(),50000); 