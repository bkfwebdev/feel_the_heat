var gridData = [];
var theGrid = document.getElementsByClassName("gridElement");
var gridSize = theGrid.length;

function HeatElement(theTemp,theColor,selected,rep){
    this.temperature = theTemp;
    this.colorString = theColor;
    this.isSelected = selected;
    this.screenrep = rep;
 }

 function initializeGridData(){
 for (index = 0; index <= 99; index++){
     gridData[index] = new HeatElement(0,"black",false,theGrid[index]);
 }
 }

function colorThat(x, red, green , blue , grid){
    grid[x].style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function randomColors() {
for (x = 0 ; x < gridSize ; x++){
let red = Math.floor(Math.random()*255);
let green = Math.floor(Math.random()*255);
let blue = Math.floor(Math.random()*255);   
console.log(red,green,blue);
colorThat(x,red,green,blue,theGrid);
}
}

function getAvergae (index){
    let averageTemp = 0;
    // uses elements posistion to get avergae temperature based on surrrounding elements
    // top left corner index = 0
    if (index == 0){
        averageTemp = (gridData[index].temperature + gridData[index+1].temperature + gridData[index+10].temperature + gridData[index + 11].temperature)/4;
    }
else
    // top edge index > 0 and < 9
    if (index > 0 && index < 9){
        averageTemp = (gridData[index].temperature + gridData[index-1].temperature + gridData[index+1].temperature + gridData[index+9].temperature + gridData[index+10].temperature + gridData[11])/6
    }
else
    // top right corner index = 9
    if (index == 9){
        averageTemp = (gridData[index].temperature + gridData[index-1].temperature + gridData[index+9].temperature + gridData[index+10])/4;
    }
else   
        // left edge index is a multiple of 10
    if (index >= 10 && index <= 90 && index % 10 == 0){
        let top = gridData[index-10].temperature;
        let topRight = gridData[index-9].temperature;
        let right = gridData[index+1].temperature;
        let bottomRight = gridData[index+11].temperature;
        let bottom = gridData[index+10].temperature;
        averageTemp = (gridata[index] + top + topRight + right + bottomRight + bottom)/6;
    }
else
    // right edge index is a multiple of 10 , plus 9
    if ((index >= 19 ) && (index <= 89) && ((index - 9)%10 == 0)){
        let top = gridData[index-9].temperature;
        let topLeft = gridData[index-10].temperature;
        let left = gridData[index-1].temperature;
        let bottomLeft = gridData[index+9].temperature;
        let bottom = gridData[index+10].temperature;
        averageTemp = (gridData[index] + top + topLeft + left + bottomLeft + bottom)/6;
    }
else
    // bottom right corner index = 99
    if (index == 99){
        let top = gridData[index-10].temperature;
        let topLeft = gridData[index-11].temperature;
        let left = gridData[index-1].temperature;
        let averageTemp = (gridData[index].temperature + top + topLeft + left)/4;
    }
else
    // bottom edge index > 90 and < 99
    if (index > 90 && index < 99){
        let left  = gridData[index-1].temperature;
        let topLeft = gridData[index-11].temperature;
        let top = gridData[index-10].temperature;
        let topRight = gridData[index-9].temperature;
        let right = gridData[index+1].temperature;
        averageTemp = (gridData[index].temperature + left + topLeft + top + topRight + right)/6;
    }
else
    // bottom left corner index = 90
    if (index == 90){
        let top = gridData[index-10].temperature;
        let topRight = gridData[index-9].temperature;
        let right = gridData[index+1].temperature;
        averageTemp = (gridData[index].temperature + top + topRight + right)/4
    } else {

    // inner elements (fails all other conditions)
    let topLeft = gridData[index-11].temperature;
    let top = gridData[index-10].temperature;
    let topRight = gridData[index-9].temperature;
    let right = gridData[index+1].temperature;
    let left = gridData[index-1].temperature;
    let bottomLeft = gridData[index+9].temperature;
    let bottom = gridData[index+10].temperature;
    let bottomRight = gridData[index+11].temperature;
    averageTemp = (gridData[index].temperature + topLeft + top + topRight + right + bottomRight + bottom + bottomLeft + left)/9;
    }

    return averageTemp;

}


function cycleGrid (){
for (index = 0; index <= 99 ; index++){
    if (gridData[index].selected == true){gridData[index].temperature = getAvergae(index)}
    else{gridData[index].temperature = gridData[index].temperature +1;}
}
console.log("grid cycle complete");
}

function upddateGrid (){
for(index = 0 ; index < gridSize; index++){
    if (gridData[index].temperature > 100){gridData[index].colorString = "red";}
    if (gridData[index].temperature > 200){gridData[index].colorString = "orange";}
    if (gridData[index].temperature > 300){gridData[index].colorString = "yellow";}
    if (gridData[index].temperature > 400){gridData[index].colorString = "green";}
    if (gridData[index].temperature > 500){gridData[index].colorString = "blue";}
    if (gridData[index].temperature > 600){gridData[index].colorString = "indigo";}
    if (gridData[index].temperature > 700){gridData[index].colorString = "violet";}
    gridData[index].screenrep.style.backgroundColor = gridData[index].colorString; }
    console.log("grid update complete");
}
initializeGridData();

$(function() {   
    $('.gridElement').click(function(){
        //let thisColor = "";
        let gridIndex = Array.prototype.indexOf.call(theGrid,this);
        //if(gridData[gridIndex].isSelected = true){thisColor = "gold";}
        //if(gridData[gridIndex].isSelected = false){thisColor = "black";}
        //$(this).css('background', thisColor);
        gridData[gridIndex].isSelected = !gridData[gridIndex].isSelected
      });
    });

setInterval(cycleGrid,100);
setInterval(upddateGrid,100);

