//GenderJS by Emily Peregrine
//Started 10/08/2015 DD/MM/YYYY
function Gender(value, pronoun, title) {
	this.val = value;
	this.pronoun = pronoun;
	this.title = title;
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

Gender.prototype.getCommonTitle = function () {
	var msg = this.toString();

	switch (msg) {
		case Gender.FeminineMsg:
			return "Ms";
		case Gender.MasculineMsg:
			return "Mr";
		case Gender.NeutralMsg:
		case Gender.FluidMsg:
		case Gender.UnsureMsg:
			return "Mx";
	}
}

function Pronoun (subjective, objective, possessiveDeterminer, possessive, reflexive) {
	this.subjective = subjective;
	this.objective = objective;
	this.possessiveDeterminer = possessiveDeterminer;
	this.possessive = possessive;
	this.reflexive = reflexive;
}

Pronoun.He = new Pronoun("He", "Him", "His", "His", "Himself");
Pronoun.She = new Pronoun("She", "Her", "Her", "Hers", "Herself");
Pronoun.They = new Pronoun("They", "Them", "Their", "Theirs", "Themselves");