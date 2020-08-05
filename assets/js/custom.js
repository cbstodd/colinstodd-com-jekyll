const humanSelect = document.getElementById('human');
const correctSelection = document.getElementById('humanSelection');
const submitBtn = document.getElementById('submitContactForm');

humanSelect.addEventListener('click', (evt) => {
	evt.preventDefault();
	const _selectedValue = evt.target.value;
	validateForm(_selectedValue);
})

function validateForm(selectedValue) {
	if (selectedValue == 3) {
		// Removes danger styling if user selected wrong answer.
		humanSelect.classList.remove('isBot');
		correctSelection.parentNode.classList.remove('isBotText');	
		// Adds success styling if user selected right answer.
		humanSelect.classList.add('isHuman');		
		correctSelection.parentNode.classList.add('isHumanText');	
		correctSelection.innerHTML = `<span style="background-color:#414C20!important;">Good, you're not a Bot!</span>`;
		// Enables Button
		submitBtn.disabled = false;
		submitBtn.value = 'Submit Message';
		
	} else {
		humanSelect.classList.add('isBot');
		correctSelection.parentNode.classList.add('isBotText');			
		
		submitBtn.disabled = true;
		submitBtn.value = 'Form still invalid';
	}	
}