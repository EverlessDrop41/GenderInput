var slider = document.getElementById('gender-slider');
var pronounSelect = document.getElementById('pronoun-select');
var msgOutput = document.getElementById('gender-string');

pronounSelect.hasChanged = false; //Add a new property

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
var UnsureMsg = "Prefer not to say";

var GenderValue = 5;
var InputType = "Slider";
var PreferedPronoun = pronounSelect.options[pronounSelect.selectedIndex].value;

pronounSelect.onchange = function () {
    //console.log(pronounSelect.value);
    pronounSelect.hasChanged = true;
    PreferedPronoun = pronounSelect.options[pronounSelect.selectedIndex].value;
}

function typeChange (val) {
	//TODO: code
	InputType = val;
	slider.disabled = (InputType != "Slider");

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
	//console.log(GenderValue);
	var output = document.querySelector(outputId);
	output.value = val;
	if (InputType == "Slider") {
		GenderValue = val;
	}
	updateMsg(GenderValue);
}

function updateMsg (val) {
	var outputMsg = GetGenderString(val);
	msgOutput.innerHTML = outputMsg;
	updatePronounSelector(outputMsg);
}

function updatePronounSelector(GenderStr) {
    if (!pronounSelect.hasChanged) {
        if (GenderStr == MasculineMsg) {
            pronounSelect.value = "He";
        }
        else if (GenderStr == FeminineMsg) {
            pronounSelect.value = "She";
        }
        else {
            pronounSelect.value = "They";
        }
    }
}

function GetGenderString (val) {
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
	return outputMsg;
}