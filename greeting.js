const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const userLs = 'currentUser';
const showingOn = 'showing';

function askForName() {
    form.classList.add(showingOn);
}

function paintGreeting(text) {
    form.classList.remove(showingOn);
    greeting.classList.add(showingOn);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(userLs);
    if(currentUser === null) {
        askForName();
        console.log('currentUser === null');
    } else {
        paintGreeting(currentUser);
        consoloe.log('currentUser !== null');
    }
}

function init() {
    console.log('init()');
    loadName();
}

init();