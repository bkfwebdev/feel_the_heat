<script>
// heat node factory
function nodeElement(nodeColor,nodeTemperature){

	this.nodeColor = nodeColor; 
    this.nodeTemperature = nodeTemperature;
};




// create node grid representation
var theGrid = [];
var initialTemp = 0;
var initialColor = "#000000";

// initialize the grid
for (i=0; i<100; i++)
    {
	theGrid[i] = new nodeElement(initialColor,initialTemp)
	}
  console.log(theGrid);  
  
// heat selected node & spread heat across the grid

function spreadHeat(nodePointer,gridCopy){

for (i=0; i<1001; i++){

	// spread heat using average value over all nodes
       
for (j =0; j<100; j++){
    console.log(j);
	//top left corner
	if(j == 0)
        {
		gridCopy[j].nodeTemperature = (gridCopy[j].nodeTemperature + gridCopy[j+1].nodeTemperature + gridCopy[j+10].nodeTemperature + gridCopy[j+11])/4;  
        }
    
	//top edge
	if(j > 0 && j < 9)
        {
		gridCopy[j].nodeTemperature = (gridCopy[j].Temperatue + gridCopy[j-1].Temperature + gridCopy[j+1].nodeTemperature +gridCopy[j+9].nodeTemperature + gridCopy[j+10].nodeTemperature + gridCopy[j+11].nodeTemperature)/6; 
        }
	
	//top right corner
	if(j == 9)
        {
		gridCopy[j].Temperature = (gridCopy[j].Temperature + gridCopy[j-1].Temperature + gridCopy[j+9].Temperature + gridCopy[j+10].Temperature)/4;
        }
    
	//right edge
	if (j % 10 == 9)
        {
		gridCopy[j].nodeTemperature = (gridCopy[j].nodeTemperature + gridCopy[j-1].nodeTemperature + gridCopy[j-11].nodeTemperature + gridCopy[j-10].nodeTemperature + gridCopy[j+10].nodeTemperature + gridCopy[j+9].nodeTemperature)/6;
        }
	
	//bottom right corner
	if (j = 99)
        {
		gridCopy[j].nodeTemperature = (gridCopy[j].nodeTemperature + gridCopy[j-1].nodeTemperature + gridCopy[j-11].nodeTemperature + gridCopy[j-10].nodeTemperature)/4
        }
    
	//bottom edge
	if (j > 90 && i < 99)
        {
		gridCopy[j].nodeTemperature = (gridCopy[j] .nodeTemperature + gridCopy[j-1].nodeTemperature + gridCopy[j-11].nodeTemperature + gridCopy[j-10].nodeTemperature + gridCopy[j-9].nodeTemperature + gridCopy[j+1].nodeTemperature)/6;
        }
		
	//bottom left corner
	if (j == 90)
        {
		gridCopy[j].nodeTemperature = (gridCopy[j].nodeTemperature + gridCopy[j-10].nodeTemperature + gridCopy[j-9].nodeTemperature + gridCopy[j+1].nodeTemperature)/4;
        }
		
	//left edge
	if (j  % 10 == 0)
        {
		gridCopy[j].nodeTemperatue = (gridCopy[j].nodeTemperature + gridCopy[j+1].nodeTemperature + gridCopy[j+11].nodeTemperature + gridCopy[j+10].nodeTemperature + gridCopy[j-10].nodeTemperature + gridCopy[j-9].nodeTemperature)/6;
        }
    
	//inside the grid
	if (j>= 11 && j<=99)
        {
		gridCopy[j].nodeTemperature = (gridCopy[j].nodeTemperature +gridCopy[j-1].nodeTemperature + gridCopy[j-11].nodeTemperature + gridCopy[j-10].nodeTemperature + gridCopy[j-9].nodeTemperature + gridCopy[j+1].nodeTemperature + gridCopy[j+9].nodeTemperature + gridCopy[j+10].nodeTemperature + gridCopy[j+11].nodeTemperature )/9
        }
}

	// increase selected node temperature by one degree
	gridCopy[selectedNodeIndex].nodeTemperature = gridCopy[selectedNodeIndex].nodeTemperature + 1;
} 
}


function updateGrid( ){
	// update grid colors to match temperatures
if (theGrid[i].nodeTemperature < 1000){grid[index].nodeColor = "#000000"};
if (theGrid[i].nodeTemperature >= 1000){nodeObjectArray[index].nodeColor ="#191000"}; 
if (theGrid[i].nodeTemperature >= 2000){nodeObjectArray[index].nodeColor ="#332100"};
if (theGrid[i].nodeTemperature >= 3000){nodeObjectArray[index].nodeColor ="#4c3100"};
if (theGrid[i].nodeTemperature >= 4000){nodeObjectArray[index].nodeColor ="#664200"};
if (theGrid[i].nodeTemperature >= 5000){nodeObjectArray[index].nodeColor ="#7f5200"};
if (theGrid[i].nodeTemperature >= 6000){nodeObjectArray[index].nodeColor ="#996300"};
if (theGrid[i].nodeTemperature >= 7000){nodeObjectArray[index].nodeColor ="#b27300"};
if (theGrid[i].nodeTemperature >= 8000){nodeObjectArray[index].nodeColor ="#cc8400"};
if (theGrid[i].nodeTemperature >= 9000){nodeObjectArray[index].nodeColor ="#e59400"};
if (theGrid[i].nodeTemperature >= 10000){nodeObjectArray[index].nodeColor ="#ffa500"};
}



/  


	
