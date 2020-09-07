// contactAjax.js
// const actionURL = 'https://getform.io/f/248d99c5-214c-4ffe-b8f7-f12be8720b59';
// const reCAPTCHASiteKey = '6LegH8gZAAAAAMLfDAYMJ5lxwutTMMeyI9QG27FP';
$('#contactForm').submit(function(e) {
  e.preventDefault();
  var action = $(this).attr('action');
  $.ajax({
    type: 'POST',
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: 'json',
    contentType: 'multipart/form-data',
    processData: false,
    headers: {
      Accept: 'application/json'
    }
  })
    .done(function() {
      $('.success').addClass('is-active');
      console.log('Form Data submitted successfully!');
    })
    .fail(function() {
      alert('An error occurred please try again later.');
      console.error('Form Contact Form data was not submitted', error);
    });
});
