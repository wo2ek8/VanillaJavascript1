const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.greeting');

const USER_LS = 'currentUser';
const showingOn = 'showing';

function saveName() {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    showGreeting(currentValue);
}

function askForName() {
    form.classList.add(showingOn);
    form.addEventListener('submit', handleSubmit);
}

function showGreeting(text) {
    form.classList.remove(showingOn);
    greeting.classList.add(showingOn);
    

    const date = new Date();
    const hours = date.getHours();

    if (hours >= 6 && hours < 12) {
        greeting.innerText = `Good morning, ${text}`;
    } else if (hours >= 12 && hours < 18) {
        greeting.innerText = `Good afternoon, ${text}`;
    } else if(hours >= 18 && hours < 24) {
        greeting.innerText = `Good evening, ${text}`;
    } else {
        greeting.innerText = `Good night, ${text}`;
    }
    
    saveName(text);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    
    if(currentUser === null) {
        askForName();
    } else {
        showGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();