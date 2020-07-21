//Can I vote. True if >18 else false
const canIVote = (age) => {
	if (age > 18) {
		return true;
	} else {
		return false;
	}
};

console.log(canIVote(19));

//Agree or Disagree
const agreeOrDisagree = (a, b) => {
	if (a === b) {
		return "Agree";
	} else {
		return "Disagree";
	}
};

console.log(agreeOrDisagree(1, 1));

//Life Phase
const lifePhase = (age) => {
	if (age <= 0 || age > 140) {
		return "Invalid age";
	} else if (age <= 3) {
		return "baby";
	} else if (age <= 12) {
		return "child";
	} else if (age <= 19) {
		return "teenager";
	} else {
		return "adult";
	}
};

console.log(lifePhase(7));

//Final grades
const finalGrade = (grade1, grade2, grade3) => {
	if (
		grade1 < 0 ||
		grade1 > 100 ||
		grade2 < 0 ||
		grade2 > 100 ||
		grade3 < 0 ||
		grade3 > 100
	) {
		return "Invalid grade";
	}

	var avGrade = (grade1 + grade2 + grade3) / 3;
	if (avGrade <= 59) {
		return "Grade F";
	} else if (avGrade <= 69) {
		return "Grade D";
	} else if (avGrade <= 79) {
		return "Grade C";
	} else if (avGrade <= 89) {
		return "Grade B";
	} else {
		return "Grade A";
	}
};

console.log(finalGrade(80, 70, 90));

//Reporting for duty
const reportingForDuty = (rank, lastName) => {
	return rank + lastName + " report for duty!";
};

console.log(reportingForDuty("Cadete", " Joao"));

//Fix the code
const rollTheDice = () => {
	// Math.random() gives us a random number from 0 up to, but not including, 1
	// We multiplied that by 6 to get a number between 0 and up to, but not including, 6
	// But since we actually wanted numbers from 1 to 6, inclusive, we added 1
	let die1 = Math.floor(Math.random() * 6 + 1);
	let die2 = Math.floor(Math.random() * 6 + 1);
	console.log(die1, die2);
	return die1 + die2;
};

console.log(rollTheDice());
