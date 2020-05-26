function sayHello(name, age) {
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