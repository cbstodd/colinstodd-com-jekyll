$('#ajaxForm').submit(function(e) {
  e.preventDefault();
  const reCAPTCHASiteKey = '6LcNQ8kZAAAAACJL-16GCA8EfkaizSE57L-ZX3Ct';
  const action = $(this).attr('action');
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
      grecaptcha.ready(() => {
        grecaptcha
          .execute(reCAPTCHASiteKey, {
            action: 'submit'
          })
          .then(token => {
            document.getElementById('captchaResponse').value = token;
          });
      });
      $('.success').addClass('is-active');
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
