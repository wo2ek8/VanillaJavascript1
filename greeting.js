const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const userLs = 'currentUser';
const showingOn = 'showing';

function saveName(text) {
    localStorage.setItem(userLs, text);
}

function handleSubmit(e) {
    e.preventDefault();
    const cv = input.value;
    paintGreeting(cv);
}

function askForName() {
    form.classList.add(showingOn);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(showingOn);
    greeting.classList.add(showingOn);
    greeting.innerText = `Hello ${text}`;
    saveName(text);
}

function loadName() {
    const currentUser = localStorage.getItem(userLs);
    if(currentUser === null) {
        askForName();
        console.log('currentUser === null');
    } else {
        paintGreeting(currentUser);
        console.log('currentUser !== null');
    }
}

function init() {
    console.log('init()');
    loadName();
}

init();