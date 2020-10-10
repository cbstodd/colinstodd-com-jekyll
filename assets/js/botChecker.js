class BotChecker {
	constructor() {
	  this.randomNumbers();
	  this.addNumbers();
	  this.num1 = this.randomNumbers();
	  this.num2 = this.randomNumbers();
	}

	randomNumbers() {
	  return Math.floor(Math.random() * 7 + 1);
	}

	addNumbers() {
	  return this.num1 + this.num2;
	}

	checkUsersGuess(usersGuess) {
	  this.randomNumbers();
	  const finalNum = this.addNumbers();
	  if (usersGuess === finalNum.toString()) {
		return true;
	  } else {
		return false;
	  }
	}
  }

