const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greeting');

const USER_LS = 'correntUser',
  SHOWING_CN = 'showing';

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
}

function askName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit)
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    askName();
  } else {
    paintGreeting();
  }
}

function init() {
  loadName();
}

init();
