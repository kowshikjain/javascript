// function statement or function declaration
function a() {
    console.log('functionStatement');
}
a();

//the difference between function statement and function exxpression is hoisting

//function expression
function b() {
    console.log('functionExpression');
}
b();
/*
// anonymous function(used in declaring function as a value)
function(){

}
*/
// named function expression
var c = function kd() {
    console.log('named function expression');
};
// kd()-->can't access outside
c();

// parameter and arguments
function dq(param1, param2) {
    console.log(param1 + param2);
}
dq(0, 0);

// first class function
function ab() {
    return function xyz() {};
}
console.log(ab()); // ability to use functions as a values known as first class function
// first class citizen same as first class function

// arrow function
var arr = () => {
    console.log('welcome to arrow function');
};
arr();
