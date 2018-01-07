// get grid elements
var gridView = document.getElementsByClassName("element");
console.log(gridView);
// define functions
// element factory
var heatElement = function (temp,redValue,greenValue,blueValue,userSelected){
    this.temp = temp;
    this.redValue = redValue;
    this.greenValue = greenValue;
    this.blueValue = blueValue; 
    this.userSelected = userSelected;
}

// set up grid data
var gridSize = gridView.length;
var gridData = [];
for (let x=0;x<gridSize;x++){
    gridData[x] = new heatElement(0,0,0,0,false);
    }


// cool grid
function coolGrid () {
    for (let index = 0; index < gridSize; index++){
        if (gridData[index].temp >= 1){gridData[index].temp =-1}
            
    }
}
// update view
function updateView (){
    console.log("update view fired");
    for (let z = 0; z < gridSize; z++){
       
        gridView.item(z).style.backgroundColor = "rgb(" +  gridData[z].redValue + "," + gridData[z].greenValue + "," + gridData[z].blueValue + ")";
    }
}

// spread heat
function selectEvent (index){
    console.log("select event fired")
    gridData[index].temp += 1; 
    if (gridData[index].temp < 255){
        gridData[index].redValue += 1; 
    }
    if (gridData[index].temp >= 255 && gridData[index].temp < 510){
        gridData[index].greenValue += 1;
    }
    if (gridData[index].temp >= 510 && gridData[index] < 765){
        gridData[index].blueValue += 1
    }
      
    } 


    function heatCycle (){
        console.log("heat cycle fired");
        for (let j =0; j<99; j++){
            console.log(j);
        if (gridData[j].userSelected === true){selectEvent(j);}
          if (gridData[j].userSelected === false){  
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
            if(j === 9)
                {
                gridData[j].Temperature = (gridData[j].Temperature + gridData[j-1].Temperature + gridData[j+9].Temperature + gridData[j+10].Temperature)/4;
                }
            
            //right edge
            if (j % 10 === 9)
                {
                gridData[j].temp = (gridData[j].temp + gridData[j-1].temp + gridData[j-11].temp + gridData[j-10].temp + gridData[j+10].temp + gridData[j+9].temp)/6;
                }
            
            //bottom right corner
            if (j === 99)
                {
                gridData[j].temp = (gridData[j].temp + gridData[j-1].temp + gridData[j-11].temp + gridData[j-10].temp)/4
                }
            
            //bottom edge
            if (j > 90 && i < 99)
                {
                gridData[j].temp = (gridData[j] .temp + gridData[j-1].temp + gridData[j-11].temp + gridData[j-10].temp + gridData[j-9].temp + gridData[j+1].temp)/6;
                }
                
            //bottom left corner
            if (j === 90)
                {
                gridData[j].temp = (gridData[j].temp + gridData[j-10].temp + gridData[j-9].temp + gridData[j+1].temp)/4;
                }
                
            //left edge
            if (j !=0 && j  % 10 === 0)
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
       
    }  

// set event listeners
function setEvents(){
    for (let i = 0; i < gridSize; i++){
    
       gridView[i].addEventListener("mouseover", function() {gridData[i].userSelected = true;})
       gridView[i].addEventListener("mouseout", function() {gridData[i].userSelected = false;})
     }  
   }

setInterval(updateView(),1000);
setInterval(heatCycle(),1000);
setInterval(coolGrid(),5000);

// on event simply set selected vs not selected in data
// cycle the grid
//      if selected add 1 to temperature
//      if not selected compute average
// cool grid every 5 seconds
// seperate data from view
// update view at end of each cycle
// cycle is continuous , mouse events change what happen during the cycle
