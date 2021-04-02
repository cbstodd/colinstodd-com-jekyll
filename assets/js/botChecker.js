export class BotChecker  {
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

	// TODO: Needs to be fixed. It's currently not working.
	isNumberTypeCheckOnDirty(usersGuess) {
		try {
			if (typeof usersGuess == 'number') {
				console.log(typeof usersGuess == 'number');
				return true;
			} else {
				alert('Your answer must be a number/an integer.');
				console.error(`cbsERROR: the users response is not a type of number.`);
				return false;
			}
		}   catch (err) {
			console.error(`cbsERROR: Something went wrong, check for misspellings.`);
			console.error(err);
		}
	}

	async checkUsersGuess(usersGuess)  {
		this.randomNumbers();
		const finalNum = this.addNumbers();
		const guessIsNumber = await this.isNumberTypeCheckOnDirty(usersGuess);
		if (guessIsNumber === finalNum.toString()) {
			console.log()
			return true;
		} else {
			return false;
		}
	}
}

