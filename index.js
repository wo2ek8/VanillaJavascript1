/*function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old`;
    
}

const greetJaei = sayHello('Jaei', 23);

const daelee = "daelee";

console.log(greetJaei);

const calculator = {
    plus: function(a, b) {
        return a + b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);

const title = document.getElementById('title');

console.log(title);

console.error('Fuck');

//title.innerHTML = 'Hi! From JS';

//title.style.color = 'red';
console.dir(document);

document.title = 'I own you now';

function handleResize() {
    console.log('I have been resized');
}

window.addEventListener('resize', handleResize);

function handleClick() {
    title.style.color = 'blue';
}

title.addEventListener('click', handleClick);*/

const title = document.querySelector('#title');


function handleClick() {
    
    
    const currentColor = title.style.color;
    console.log(currentColor);
    
    if(currentColor === 'gold') {
        title.style.color = 'pink';
    } else {
        title.style.color = 'gold';
    }
}

function init() {
    title.style.color = 'gold';
    title.addEventListener('mouseenter', handleClick)
}

init();

/*const title = document.querySelector('#title');
 
const baseColor = '#fff';
const otherColor = '#000';

function handleClick() {
    title.style.color = baseColor;
    const currentColor = title.style.color;
    console.log(currentColor);
}

function init() {
    
    title.addEventListener('click', handleClick);
}

init();*/