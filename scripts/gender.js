//GenderJS by Tom Peregrine
//Started 10/08/2015 DD/MM/YYYY
function Gender(value) {
	this.val = value;
}

Gender.FeminineMsg = "Female";
Gender.MasculineMsg = "Male"; 
Gender.NeutralMsg = "Gender Neutral";
Gender.FluidMsg = "Gender Fluid";
Gender.UnsureMsg = "Prefer not to say";

Gender.prototype.toString = function () {
	var outputMsg;
	if (this.val >= 0 && this.val < 3.5) {
		outputMsg = Gender.FeminineMsg;
	}
	else if (this.val >= 3.5 && this.val < 6.5) {
		outputMsg = Gender.NeutralMsg;
	}
	else if (this.val >= 6.5 && this.val <= 10) {
		outputMsg = Gender.MasculineMsg;
	}
	else if (this.val > 10) {
		outputMsg = Gender.FluidMsg;
	}
	else {
		outputMsg = Gender.UnsureMsg;
	}
	return outputMsg;
}
