const clipboard = new ClipboardJS('.copy-btn');
const appleUrl = new ClipboardJS('.apple-btn');
const isHuman = document.getElementById('isHuman');
const notHuman = document.getElementById('notHuman');
const hideBotSelect = document.getElementsByClassName('hide-bot-select');
const botIcon = document.getElementById('botIcon');
const checkAnswerBtn = document.getElementById('checkAnswerBtn');
const allBotsSelect = document.querySelectorAll('hide-bot-select');
let isHumanState = false;
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

/*
  Validate Contact Form --------------------+
*/

// Returns boolean value if checked or not.
isHuman.addEventListener('click', evt => {
  const checkedState = evt.target.checked;
  if (checkedState === true) {
    notHuman.checked = false;
    isHumanState = true;
    updateSubmitBtnState(true);
    console.log('checkedState', checkedState);
  } else {
    isHumanState = false;
    isHuman.checked = false;
    updateSubmitBtnState(false);
  }
});

notHuman.addEventListener('click', evt => {
  const checkedState = evt.target.checked;
  if (checkedState === true) {
    isHuman.checked = false;
    isHumanState = false;
    updateSubmitBtnState(false);
    console.log('checkedState', checkedState);
  } else {
    notHuman.checked = false;
  }
});

function updateSubmitBtnState(isHumanState) {
  if (isHumanState === true) {
    submitBtn.disabled = false;
    submitBtn.value = 'Submit Message';
  } else {
    submitBtn.disabled = true;
    submitBtn.value = 'Form Invalid';
  }
}
