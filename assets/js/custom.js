const clipboard = new ClipboardJS('.copy-btn');
const appleUrl = new ClipboardJS('.apple-btn');

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

// ######  Contact form Bot Check ######
const humanSelect = document.getElementById('isHuman');
const botIcon = document.getElementById('botIcon');
const submitBtn = document.getElementById('contactSubmitBtn');

const validateHuman = (selectedValue) => {  
  if (selectedValue) {    
    botIcon.classList.remove('fa-user-robot');
    botIcon.classList.add('fa-user');    
    submitBtn.disabled = false;
    submitBtn.value = 'Submit Message';  
  } else {    
    botIcon.classList.remove('fa-user');    
    botIcon.classList.add('fa-user-robot');
    submitBtn.disabled = true;
    submitBtn.value = 'Form Invalid';  
  }
}

// Returns boolean value if checked or not.
humanSelect.addEventListener('click', evt =>  validateHuman(evt.target.checked));
