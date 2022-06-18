// take reference ...
const username = document.getElementById('username');
const email = document.getElementById('email');
const text_msg = document.querySelector('textarea');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  ValidationOn_prosess = false;
  checkValidity();
  // isNameValid();
  // isEmailValid();
  // isMessageValid();

  // after successfully submitting form reset the page ... 
  if (formStatus) {
    submitting_msg();
    form.reset();
  };
});

let formStatus = false;
let ValidationOn_prosess = true;

function checkValidity() {

  if (ValidationOn_prosess) return;

  // checking name is valid or not ? ...
  // function isNameValid() {
  if (username.value.trim() === '' || username.value.trim() == undefined) {
    setError(username, '* Username is required!');
    //username.focus();
    formStatus = false;
  }
  else if (!isNaN(username.value)) {
    setError(username, '* Only number are not accepted!');
    // username.focus();
    formStatus = false;
  }
  else {
    set_valid(username);
    formStatus = true;
  };
  //};

  // to checking mail id is valid and correct or not ? ...
  //check validity through Regex language ...
  // function isEmailValid() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value.trim() === '' || email.value.trim() == undefined) {
    setError(email, '* Email is required!');
    // email.focus();
    formStatus = false;
  }
  else if (!re.test(email.value.trim())) {
    setError(email, "* You have entered an invalid email address!");
    // email.focus();
    formStatus = false;
  }
  else {
    set_valid(email);
    formStatus = true;
  };
  //  };

  // checking message are valid ? ...
  // function isMessageValid() {
  if (text_msg.value === '' || text_msg.value == undefined) {
    //text_msg.focus();
    setError(text_msg, '* Message is required!');
    formStatus = false;
  }
  else if (text_msg.value.length < 2) {
    setError(text_msg, '* Before submit ! please recheck your message. message are too short! ');
    // text_msg.focus();
    formStatus = false;
  }
  else if (text_msg.value.length > 600) {
    setError(text_msg, '* Your message should be under 600 letters. ');
    // text_msg.focus();
    formStatus = false;
  }  else {
    set_valid(text_msg);
  };
  //};
};

// check everytime the input values are valid ? ...
const inputs = [username, email, text_msg];

inputs.forEach(
  (e) => {
    e.addEventListener('input', () => {
      checkValidity();
    });
  });

// [ Using forEach(), because don't copy past the same command for every single input fields ...]
//username.addEventListener('input', () => {
// isNameValid();
//});
//email.addEventListener('input', () => {
// isEmailValid();
//});
//text_msg.addEventListener('input', () => {
//isMessageValid();
//});


// when input fields are not valid then get errors and error message ...
const setError = (element, message) => {
  const error_handler = element.parentElement;
  const errorDisplay = error_handler.querySelector('#errormsg');

  errorDisplay.innerHTML = message;
  element.classList.add('error');
};

// when input fields are valid then work this set_valid function ...
const set_valid = (element) => {
  const error_handler = element.parentElement;
  const errorDisplay = error_handler.querySelector('#errormsg');

  element.classList.remove('error');
  errorDisplay.innerHTML = '';
};

// submitting message for user ...
function submitting_msg() {
  let msg = document.querySelector('.feedback');
  msg.classList.add('active');

  // delay function for auto remove the submitting message ...
  setTimeout(
    (autotoggle_msg) => {
      msg.classList.remove('active');
    }, 1000);
};
