const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getDate() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const today = date.getDate();
    const day = date.getDay();
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    
    
    
    clockTitle.before(`${month < 10 ? '0' + month : month}월 ${today < 10 ? '0' + today : today}일 ${daysOfWeek[day]}요일`);
}

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
    getDate();
    getTime();
    setInterval(getTime, 1000);
}

init();

/*const n = '근덕';
const a = 29;

const greeting = `하이 나는 ${n} ${a}인디`;

console.log(greeting);*/