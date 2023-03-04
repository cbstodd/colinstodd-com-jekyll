import * as _const from './html-constants.js';
import { validFormCheck, getId } from './contact.js';
import { BotChecker } from './botChecker.js';
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
let isNotABot = false;

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

function disableSubmitBtn(isEnabledValue) {
    getId('submitBtn').disabled = isEnabledValue;
}

window.onload(disableSubmitBtn(true));
mathResult.classList.add('hide-bot-select');

function isHumanAlert(value) {
    const valid = validFormCheck();
    if (valid && value) {
        isNotABot = true;
        console.log('valid: ', valid);
        mathResult.classList.add('not-a-bot');
        botCheck.classList.add('not-a-bot');
        getId('warningMsg').style.display = 'none';
        mathResult.innerHTML = _const.isHumanAlertMessage;
    } else if (value) {
        mathResult.classList.add('not-a-bot');
        botCheck.classList.add('not-a-bot');
        getId('warningMsg').style.display = 'none';
        mathResult.innerHTML = _const.isHumanAlertMessage;
    } else {
        mathResult.classList.add('not-a-bot');
        botCheck.classList.add('not-a-bot');
        getId('warningMsg').style.display = 'none';
        mathResult.innerHTML = _const.isHumanAlertMessage;
    }
}

function isNotHumanError() {
    mathResult.classList.remove('not-a-bot');
    botCheck.classList.remove('not-a-bot');
    mathResult.classList.add('is-a-bot');
    botCheck.classList.add('is-a-bot');
    mathResult.innerHTML = _const.isNotHumanErrorMessage;
}

function toggleBotForm(value) {
    if (value) {
        isNotABot = true;
        isHumanAlert(value);
    } else {
        isNotHumanError();
    }
}

function triggerAlertQuestion(checkedState) {
    if (!checkedState) {
        disableSubmitBtn(true);
    } else {
        disableSubmitBtn(false);
        isNotABot = true;
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
        triggerAlertQuestion(false);
    } else {
        disableSubmitBtn(false);
        mathResult.classList.add('bot-select');
        setTimeout(() => triggerAlertQuestion(true), 300);
    }
});

export { isNotABot, disableSubmitBtn };