//GenderJS by Tom Peregrine
//Started 10/08/2015 DD/MM/YYYY
var FeminineMsg = "Female";
var MasculineMsg = "Male"; 
var NeutralMsg = "Agender";
var FluidMsg = "Gender Fluid";
var UnsureMsg = "Prefer not to say";

function GetGenderStringFromVal (val) {
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