// Generates random number id according to specified length:
function createNewId(length) {
  const letterArray = new Array(
    'a',
    'A',
    'b',
    'b',
    'c',
    'C',
    'd',
    'D',
    'e',
    'E',
    'f',
    'F',
    'g',
    'G'
  );
  let idArray = [];

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * 8 + 1);
    idArray.push(randomNum);
    idArray.push(letterArray[i + randomNum || -2]);
  }
  const newerId = idArray.join('');
  return newerId.toString();
}

const newId = createNewId(12);

function getId(id) {
  return document.getElementById(id);
}
// Initialize Firebase(2)
const config = {
  apiKey: firebase.apiKey,
  authDomain: firebase.authDomain,
  databaseURL: firebase.databaseURL,
  projectId: firebase.projectId,
  storageBucket: firebase.storageBucket,
  messagingSenderId: firebase.messagingSenderId
};
firebase.initializeApp({
  databaseURL: 'https://colinstodd-com.firebaseio.com',
  projectId: config.projectId
});

//Reference for form collection(3)
const formMessage = firebase.database().ref(`contacts`);

//listen for submit event//(1)
getId('contactForm').addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  const name = getId('name').value;
  const email = getId('email').value;
  const reason = getId('reason').value;
  const phone = getId('phone').value;
  const message = getId('message').value;

  //send message values
  if (name && email && (reason !== 'selectOne') && message && isNotABot) {
    submitBtn.disabled = false;
    sendMessage(name, email, reason, phone, message, isNotABot, createdAt = Date());
  } else {
    getId('warningMsg').style.display = 'block';
    getId(
      'warningMsg'
    ).innerHTML = `<p class="warning">Form is not valid, please check the required values. </p>`;
    console.error('Not all form values are valid');
  }
}

//Send Message to Firebase(4)

function sendMessage(name, email, reason, phone, message, isNotABot, createdAt) {
  const newFormMessage = formMessage.push();

  newFormMessage
    .set({
      name: name,
      email: email,
      reason: reason,
      phone: phone,
      message: message,
      isNotABot: isNotABot,
      createdAt: createdAt,
    })
    .then(() => {
      mathResult.classList.remove('not-a-bot');
      botCheck.classList.remove('not-a-bot');
      botCheck.classList.remove('is-a-bot');
      getId('successMsg').classList.add('success');
      getId('successMsg').style.display = 'block';
      setTimeout(function() {
        getId('successMsg').classList.remove('success');
        getId('warningMsg').classList.remove('warning');
        getId('successMsg').innerHTML = ` `;
        getId('warningMsg').innerHTML = ` `;
        mathResult.innerHTML = ` `;
        getId('contactForm').reset();
      }, 5000);
    })
    .catch(err => {
      console.error('cbsERROR: ', err);
      mathResult.classList.remove('not-a-bot');
      botCheck.classList.remove('not-a-bot');
      getId('warningMsg').classList.add('warning');
      getId('warningMsg').style.display = 'block';
      setTimeout(function() {
        getId('warningMsg').classList.remove('warning');
        getId(
          'warningMsg'
        ).innerHTML = `<p class="text-yellow">There was an error while sending your info; please try refreshing your browser to try again, or email colin@colinstodd.com to send an email.</p>`;
      }, 5000);
    });
}

getId('contactForm').addEventListener('change', evt => {
  evt.preventDefault();
  if (isNotABot && (reason.value !== 'selectOne')) {
    console.log('Form is Valid');
    submitBtn.disabled = false;
  } else {
    console.log('Form NOT Valid');
    submitBtn.disabled = true;
  }
});
