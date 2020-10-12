// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: firebase.apiKey,
  authDomain: firebase.authDomain,
  projectId: firebase.projectId
});

var db = firebase.firestore();
// Reference messages collection
let contacts = firebase.database().ref('/contacts');
name.addEventListener('mousedown', evt => console.log(evt.target._name));
// Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  const name = getInputVal('name');
  const email = getInputVal('email');
  const phone = getInputVal('phone');
  const message = getInputVal('message');

  console.log('name', name);

  // // Save message
  saveMessage(name, company, email, phone, message);

  // // // Show alert
  // document.querySelector('.alert').style.display = 'block';

  // // // Hide alert after 3 seconds
  // setTimeout(function() {
  //   document.querySelector('.alert').style.display = 'none';
  // }, 3000);

  // // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
const getInputVal = id => document.getElementById(id).value;

// Save message to firebase
function saveMessage(_name, _company, _email, _phone, _message) {
  const newMessageRef = messagesRef.push();
  newMessageRef.set({ _name, _email, _phone, _message });
}


