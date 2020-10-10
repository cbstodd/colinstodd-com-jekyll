const formCompleteChecker = formData => {
  if (formData.name && formData.email && formData.message && formData.isHuman) {
  } else {
    // window.URL('https://colinstodd.com/404.html');
    return null;
  }
};

$('#contactForm').submit(function(e) {
  console.log(e);
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
