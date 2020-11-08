const clipboard = new ClipboardJS('.copy-btn');
const appleUrl = new ClipboardJS('.apple-btn');
const hideBotSelect = document.getElementsByClassName('hide-bot-select');
const botIcon = document.getElementById('botIcon');
const checkAnswerBtn = document.getElementById('checkAnswerBtn');
const allBotsSelect = document.querySelectorAll('hide-bot-select');
// End Constant imports.
const botCheckbox = document.getElementById('botCheckbox');
const notHuman = document.getElementById('notHuman');
const mathResult = document.getElementById('mathResult');
const showBotForm = document.getElementById('showBotForm');
const checkBox = document.getElementById('checkBox');
let isNotABot;

clipboard.on('success', evt => {
  evt.trigger.innerHTML = `<span class="text-green"><i class="fad fa-clipboard-check"></i> Copied!</span>`;
  setTimeout(() => {
    evt.clearSelection();
    evt.trigger.innerHTML = `<i class="fad fa-clipboard-list"></i> Copy`;
  }, 1500);
});

clipboard.on('error', evt => {
  evt.trigger.innerHTML = `<span class="text-pink"><i class="fad fa-exclamation-triangle"></i> Oops, unable to copy</span>`;
  setTimeout(() => {
    evt.clearSelection();
    evt.trigger.innerHTML = `<i class="fad fa-clipboard-list"></i> Copy`;
  }, 1500);
});

function calendarCopy(html, activeHtml, length) {
  appleUrl.on('success', evt => {
    evt.trigger.innerHTML = html;
    setTimeout(() => {
      evt.clearSelection();
      evt.trigger.innerHTML = activeHtml;
    }, length);
  });

  appleUrl.on('error', evt => {
    evt.trigger.innerHTML = `<span class="text-pink"><i class="fad fa-exclamation-triangle"></i> Oops, unable to copy</span>`;
    setTimeout(() => {
      evt.clearSelection();
      evt.trigger.innerHTML = `<i class="fad fa-clipboard-list"></i> Copy`;
    }, 1500);
  });
}

/*
  Validate Contact Form --------------------+
  */
// let toggleBotForm = false;
mathResult.classList.add('hide-bot-select');
function toggleBotForm(value) {
  if (value) {
    isNotABot = true;
    console.log('value', value);
    mathResult.classList.add('not-a-bot');
    botCheck.classList.add('not-a-bot');
    getId('warningMsg').style.display = 'none';
    mathResult.innerHTML = `Success! <br> <i class="fad fa-check-square"></i> 1. You made it to colinstodd.com. <br><i class="fad fa-check-square"></i> 2. You've proven that you're smart.<br> I think I'm going to like you 😉.<br>Please press Submit to send your info. or <a href="mailto:colin@colinstodd.com?subject=[Contact] from colinstodd.com&body=Hello Colin, I have a question regarding...">Email</a>. <br>Thanks!`;
  } else {
    console.log('value', value);
    isNotABot = false;
    mathResult.classList.remove('not-a-bot');
    botCheck.classList.remove('not-a-bot');
    mathResult.classList.add('is-a-bot');
    botCheck.classList.add('is-a-bot');
    mathResult.innerHTML = `<i class="fad fa-window-restore"></i> Please validate that you're a human by answering the question in the pop-up window.`;
  }
}

function triggerBotForm(checkedState) {
  if (!checkedState) {
    toggleBotForm(false);
  } else {
    const answer = new BotChecker();
    const userAnswer = prompt(
      `Please add these two numbers:  ${answer.num1} + ${answer.num2} = ?`
    );
    const botFormResults = answer.checkUsersGuess(userAnswer);
    toggleBotForm(botFormResults);
  }
}

// Returns boolean value if checked or not.
botCheckbox.addEventListener('click', evt => {
  console.log('toggleBotForm', evt.target.checked);
  if (!evt.target.checked) {
    triggerBotForm(false);
  } else {
    mathResult.classList.add('bot-select');
    setTimeout(() => triggerBotForm(true), 300);
  }
});
