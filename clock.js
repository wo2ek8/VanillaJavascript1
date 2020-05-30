const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    
    
    
    /*const name = '형진';
    const age = '24';
    
    const string = `hi! i'm ${name} and ${age} years old`;
    
    alert(string);*/
}



function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();

/*const n = '근덕';
const a = 29;

const greeting = `하이 나는 ${n} ${a}인디`;

console.log(greeting);*/