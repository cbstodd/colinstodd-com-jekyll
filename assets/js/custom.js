const clipboard = new ClipboardJS('.copy-btn');
const appleUrl = new ClipboardJS('.apple-btn');
const humanSelect = document.getElementById('isHuman');
const hideBotSelect = document.getElementsByClassName('hide-bot-select');
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
  console.log('selectedValue', selectedValue);
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

// botToggleForm.classList.add('bot-select');

// botToggleForm.classList.remove('show-bot-select');

// Returns boolean value if checked or not.
humanSelect.addEventListener('click', evt => {
  let isClicked = evt.target.checked;
  console.table('isClicked', isClicked);
  if (isClicked === true) {
    showHideBotForm(isClicked);
  }
  validateHuman(isClicked);
});

function showHideBotForm(clickedValue) {
  const allBotsSelect = allDivsByParamName('hide-bot-select');

  if (clickedValue == true) {
    allBotsSelect
      .map(classNames => {
        classNames.classList.add('bot-select');
      })
      .then(() => classNames.classList.remove('hide-bot-select'));
  } else {
    allBotsSelect
      .map(classNames => {
        console.log('divsElse', classNames);
        classNames.classList.remove('bot-select');
      })
      .then(() => classNames.classList.add('hide-bot-select'));
  }
}

function allDivsByParamName(classNames) {
  if (typeof classNames === 'string') {
    const botDivs = document.querySelectorAll(`${classNames}`);
    console.log('botdivs', botDivs);
    botDivs.forEach(classNames => classNames);
  } else {
    console.error('AllDivsByParamName paramater needs to be a string');
  }
}

// botSelect.addEventListener('click', evt => {
//   evt.preventDefault();
//   return isBot(evt.target.checked);
// });
