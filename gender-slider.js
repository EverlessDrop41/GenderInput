var slider = document.querySelector('#gender-slider');
var msgOutput = document.getElementById('gender-string');

var FeminineMsg = "Female";
var MasculineMsg = "Male"; 
var NeutralMsg = "Agender";
var FluidMsg = "Gender Fluid";
var UnsureMsg = "Unsure";

function updateOutput (val, outputId) {
	var output = document.querySelector(outputId);
	output.value = val;
	updateMsg(val);
}

function updateMsg (val) {
	//console.log("Updating Message");
	var outputMsg;
	if (val >= 0 && val < 3.5) {
		outputMsg = FeminineMsg;
	}
	else if (val >= 3.5 && val < 6.5) {
		outputMsg = NeutralMsg;
	}
	else if (val >= 6.5 && val <= 10) {
		outputMsg = MasculineMsg;
	}
	else if (val < 0) {
		outputMsg = FluidMsg;
	}
	else {
		outputMsg = UnsureMsg;
	}
	msgOutput.innerHTML = outputMsg;
	console.log(msgOutput.text);
}