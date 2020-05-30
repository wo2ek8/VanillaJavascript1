const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
    
    
    
    
    /*const name = '형진';
    const age = '24';
    
    const string = `hi! i'm ${name} and ${age} years old`;
    
    alert(string);*/
}



function init() {
    getTime();
}

init();