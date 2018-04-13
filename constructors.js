// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

//console.log(name2);

console.log(typeof name2);

if(name2 === 'Jeff'){
    console.log('yes');
} else {
    console.log('no');
}

// Number

const num1 = 5;
const num2 = new Number(5);

console.log(num2);

// Boolean

const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool2);

// Function
const fun1 = function(x, y) {
    return x + y;
}

const fun2 = new Function('x', 'y', 'return x + y');

console.log(fun2(1,1));

// Object
const john1 = {name: 'John'};
const john2 = new Object({name: 'john'});
console.log(john2);

// Array
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr2);

// Regex
const reg1 = /\w+/;
const reg2 = new RegExp('\\w+');

console.log(reg2);
