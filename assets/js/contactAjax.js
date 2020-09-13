const contactForm = Array();

$('#ajaxForm').submit(evt => {
  const reCAPTCHASiteKey = site.RECAPTCHA_SITE_KEY;
  const action = $(this).attr('action');
  evt.preventDefault();
  $.ajax({
    type: 'POST',
    url: action,
    crossDomain: true,
    data: new FormData(this),
    dataType: 'json',
    contentType: 'multipart/form-data',
    processData: false,
    contentType: false,
    headers: {
      Accept: 'application/json'
    }
  })
    .done(() => {
      // reCAPTCHA
      const myContact = contactForm(ajax.data);
      console.table(contactForm(myContact));
      grecaptcha.ready(() => {
        grecaptcha
          .execute(reCAPTCHASiteKey, { action: 'submit' })
          .then(token => {
            document.getElementById('captchaResponse').value = token;
          });
      });
      $('.success').addClass('is-active');
      botIcon.classList.remove('fa-user');
      botIcon.classList.add('fa-user-robot');
      submitBtn.disabled = true;
      submitBtn.value = 'Form Invalid';
      setTimeout(() => {
        $('.success').removeClass('is-active');
      }, 5000);
      console.log('Form Data submitted successfully!');
      document.getElementById('ajaxForm').reset();
    })
    .fail(errorMsg => {
      $('.errorMsg').addClass('is-active');
      alert('An error occurred please try again later.');
      console.error('Form Contact Form data was not submitted', errorMsg);
    });
});
