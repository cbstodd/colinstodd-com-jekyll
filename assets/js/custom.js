const humanSelect = document.getElementById('human');
const correctSelection = document.getElementById('humanSelection');
const submitBtn = document.getElementById('contactSubmitBtn');
const clipboard = new ClipboardJS('.copy-btn');

clipboard.on('success', (e) => {    
  e.trigger.innerHTML = `<span class="text-green"><i class="fad fa-clipboard-check"></i> Copied!</span>`;
  setTimeout(() => {
    e.clearSelection();
    e.trigger.innerHTML = `<i class="fad fa-clipboard-list"></i> Copy`;    
  }, 2000);  
});

clipboard.on('error', (e) => {
  e.trigger.innerHTML = `<span class="text-pink"><i class="fad fa-exclamation-triangle"></i> Oops, unable to copy</span>`;
  setTimeout(() => {
    e.clearSelection();
    e.trigger.innerHTML = `<i class="fad fa-clipboard-list"></i> Copy`;    
  }, 2000);  
});

// Contact form Bot Check
const validateForm = selectedValue => {
  if (selectedValue == 3) {
    // Removes danger styling if user selected wrong answer.
    humanSelect.classList.remove('isBot');
    correctSelection.parentNode.classList.remove('isBotText');
    // Adds success styling if user selected right answer.
    humanSelect.classList.add('isHuman');
    correctSelection.parentNode.classList.add('isHumanText');
    correctSelection.innerHTML = `<span style="background-color:#414C20!important;">Human! Good, you're not a Bot!</span>`;
    // Enables Button
    submitBtn.disabled = false;
    submitBtn.value = 'Submit Message';
  } else {
    humanSelect.classList.add('isBot');
    correctSelection.parentNode.classList.add('isBotText');

    submitBtn.disabled = true;
    submitBtn.value = 'Form still invalid';
  }
};

humanSelect.addEventListener('click', evt => {
  evt.preventDefault();
  const _selectedValue = evt.target.value;
  validateForm(_selectedValue);
});