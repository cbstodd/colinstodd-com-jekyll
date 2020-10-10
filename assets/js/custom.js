const clipboard = new ClipboardJS('.copy-btn');
const appleUrl = new ClipboardJS('.apple-btn');
const hideBotSelect = document.getElementsByClassName('hide-bot-select');
const botIcon = document.getElementById('botIcon');
const checkAnswerBtn = document.getElementById('checkAnswerBtn');
const allBotsSelect = document.querySelectorAll('hide-bot-select');
let isHumanState = false;
// End Constant imports.
// Form Inputs:
const cfName = document.getElementById('name');
const cfEmail = document.getElementById('email');
const cfTel = document.getElementById('tel');
const cfMessage = document.getElementById('message');
const isHuman = document.getElementById('isHuman');
const notHuman = document.getElementById('notHuman');
const mathResult = document.getElementById('mathResult');
const showBotForm = document.getElementById('showBotForm');
const botCheck = document.getElementById('botCheck');

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
let notABot = false;

function toggleBotForm(value) {
  if (value) {
    console.log('value', value);
    mathResult.classList.add('not-a-bot');
    botCheck.classList.add('not-a-bot');
    mathResult.innerHTML = `<i class="fad fa-lg fa-clipboard-check"></i> Success! Now you can press the button below to submit your info.`;
    isHuman.checked;
    notABot = true;
  } else {
    console.log('value', value);
    mathResult.classList.remove('not-a-bot');
    botCheck.classList.remove('not-a-bot');
    mathResult.innerHTML = `<i class="fad fa-window-restore"></i> Please answer the question in the pop-up window to prove you are not a bot.`;
    notABot = false;
  }
}

function triggerBotForm() {
  const answer = new BotChecker();
  const userAnswer = prompt(
    `Let's make sure you're not a robot can you add these two numbers:  ${answer.num1} + ${answer.num2} = ?`
  );
  const botFormResults = answer.checkUsersGuess(userAnswer);
  toggleBotForm(botFormResults);
}

// Returns boolean value if checked or not.
isHuman.addEventListener('click', evt => {
  evt.preventDefault();
  notABot = evt.target.checked;
  console.log('toggleBotForm', notABot);
  if (notABot) {
    mathResult.classList.add('bot-select');
    setTimeout(() => triggerBotForm(), 300);
  } else {
    console.log('Hide Bot Form');
    toggleBotForm = false;
  }
});
