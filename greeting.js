const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const gretting = document.querySelector('.js-greetings');

const userLS = "currentUser";
const showingCN = 'showing';

function paintGreeting(text) {
  form.classList.remove(showingCN);
  greeting.classList.add(showingCN);
  greeting.innerText = `Hello ${text}`
}

function loadName() {
  const currentUser = localStorage.getItem(userLS);
  if (currentUser === null){

  } else {
    paintGreeting(currentUser);
  }
}

function init() {

}
init();
