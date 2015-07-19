var slider = document.querySelector('#gender-slider');
var msgOutput = document.getElementById('gender-string');

// Gender Values
// < 0 - Genderfluid
// 0 - 3.444.. - Female
// 3.5 - 6.444... - Agender
// 6.5 - 10 - Male
// > 10 - Unsure/Not Say

var FeminineMsg = "Female";
var MasculineMsg = "Male"; 
var NeutralMsg = "Agender";
var FluidMsg = "Gender Fluid";
var UnsureMsg = "Unsure";

var GenderValue = 5;
var InputType = "Slider";

function typeChange (val) {
	//TODO: code
	InputType = val;

	if (InputType == "Slider") {
		GenderValue = slider.value;
		updateOutput(GenderValue, '#gender-slider-out');
	} else if (InputType == "Fluid") {
		GenderValue = 11;
	}
	else {
		GenderValue = -1;
	}
	
	updateMsg(GenderValue);
}

function updateOutput (val, outputId) {
	console.log(GenderValue);
	var output = document.querySelector(outputId);
	output.value = val;
	if (InputType == "Slider") {
		GenderValue = val;
	}
	updateMsg(GenderValue);
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
	else if (val > 10) {
		outputMsg = FluidMsg;
	}
	else {
		outputMsg = UnsureMsg;
	}
	msgOutput.innerHTML = outputMsg;
	console.log(outputMsg);
}