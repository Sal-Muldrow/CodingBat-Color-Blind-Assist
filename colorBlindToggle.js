document.addEventListener("DOMContentLoaded", initializeCbAssist); //Run Function After Page Loads
var currentAssist = localStorage.getItem("cbAssist"); //Get our currentAssist State from the localStorage

function initializeCbAssist(){ 
	if (typeof(Storage) !== "undefined") { // Determines if web storage is available
	   if(currentAssist == "true"){ 
	   	turnCbAssist("on"); // If when we intialize, Cb Assist is set to turn on, turn it on
	   }
	} else {
	    // Sorry! No Web Storage support..
	}
}

function turnCbAssist(option) {
	if(option == "on"){
		var x = document.getElementsByClassName("no"); // Get Red Table Cells
	    for (var i = x.length - 1; i >= 0; i--) {
	    	x[i].style = "background-color: white; text-align: center; font-size: 1.2em;"; // Get rid of red, Set font size
			x[i].innerHTML = "<b style='color:red'>X<b>"; // Add the X
		}
		var y = document.getElementsByClassName("ok"); // Get green cells
	    for (var i = y.length - 1; i >= 0; i--) {
	    	y[i].style = "background-color: #90ee90"; // Set cell background color to an easier green to see
			
		}

	}else{ // If we are turning the Cb Assist off

		var x = document.getElementsByClassName("no"); // Get Red Table Cells
	    for (var i = x.length - 1; i >= 0; i--) {
	    	x[i].style = "background-color: red;"; // Set cells back to red
			x[i].innerHTML = " "; // Get rid of the X
		}
		var y = document.getElementsByClassName("ok"); // Get green cells
	    for (var i = y.length - 1; i >= 0; i--) {
	    	y[i].style = "background-color: green"; // Set cells back to original green
			
		}
	}
}

function toggleAssist(){ // Decides to turn Cb Assist on or off after button click
	if(currentAssist == "false"){
		localStorage.setItem("cbAssist", "true"); // Store our current option
		currentAssist = "true"; // set our global varible to true
		turnCbAssist("on"); // Turn Cb assist on
	} else{
		localStorage.setItem("cbAssist", "false"); // Store our current option
		currentAssist = "false"; // set our global varible to false
		turnCbAssist("off"); // Turn Cb assist off	
	}
}







