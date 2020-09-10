const clipboard = new ClipboardJS('.copy-btn');
const appleUrl = new ClipboardJS('.apple-btn');
const humanSelect = document.getElementById('isHuman');
const botSelect = document.getElementById('notHuman');
const botIcon = document.getElementById('botIcon');
const submitBtn = document.getElementById('contactSubmitBtn');
const checkAnswerBtn = document.getElementById('checkAnswerBtn');
// End Constant imports.

clipboard.on('success', e => {
  e.trigger.innerHTML = `<span class="text-green"><i class="fad fa-clipboard-check"></i> Copied!</span>`;
  setTimeout(() => {
    e.clearSelection();
    e.trigger.innerHTML = `<i class="fad fa-clipboard-list"></i> Copy`;
  }, 1500);
});

clipboard.on('error', e => {
  e.trigger.innerHTML = `<span class="text-pink"><i class="fad fa-exclamation-triangle"></i> Oops, unable to copy</span>`;
  setTimeout(() => {
    e.clearSelection();
    e.trigger.innerHTML = `<i class="fad fa-clipboard-list"></i> Copy`;
  }, 1500);
});

function calendarCopy(html, activeHtml, length) {
  appleUrl.on('success', e => {
    e.trigger.innerHTML = html;
    setTimeout(() => {
      e.clearSelection();
      e.trigger.innerHTML = activeHtml;
    }, length);
  });

  appleUrl.on('error', e => {
    e.trigger.innerHTML = `<span class="text-pink"><i class="fad fa-exclamation-triangle"></i> Oops, unable to copy</span>`;
    setTimeout(() => {
      e.clearSelection();
      e.trigger.innerHTML = `<i class="fad fa-clipboard-list"></i> Copy`;
    }, 1500);
  });
}

function validateHuman(selectedValue) {
  console.log('validateHuman', selectedValue);
  if (selectedValue === true) {
    submitBtn.disabled = false;
    submitBtn.value = 'Submit Message';
  } else {
    submitBtn.disabled = true;
    submitBtn.value = 'Form Invalid';
  }
}

checkAnswerBtn.addEventListener('mouseup', () => {
  const questAnswer = document.getElementById('questAnswer').value;
  const realAnswer = site.correctBotAnswer;
  console.log(questAnswer);
  if (questAnswer && questAnswer.toLowerCase() == realAnswer) {
    validateHuman(true);
  } else {
    validateHuman(false);
  }
});

// botToggleForm.className.add('bot-select');

// botToggleForm.className.remove('show-bot-select');

// Returns boolean value if checked or not.
humanSelect.addEventListener('touch', evt => {
  validateHuman(evt.target.checked);
  showCustomBotSelect();
});

function showCustomBotSelect() {
  // botToggleForm.add.className('show-bot-select');
  humanSelect.remove.className('hide-bot-select');
};

// botSelect.addEventListener('click', evt => {
//   evt.preventDefault();
//   return isBot(evt.target.checked);
// });
