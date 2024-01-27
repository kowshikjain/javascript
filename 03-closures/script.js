/*
function x() {
    var a = 7;
    return function y() {
        console.log(a);
    };
  
  
    // return y;
}
let z = x();
console.log(z);
z();
x();
console.log(x);
// console.log(y)
*/
/*
function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        a = 100;
        b = 1000;
        // return y;
        y();
    }
    x();
}
z();
*/
/*
use of closures:
-module design pattern
-currying
-function like once
-memoize
-maintaining state in async world
-setTimeouts
-iterators
-and many more...
 */
/*
// set Timeout()  + closures
function x() {
    var x = 100;
    setTimeout(function () {
        console.log(x);
    }, 3000);
    console.log('namaste javascript');
}
x();
*/
/*
// USING CLOSURE
function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
}
x();

function a() {
    for (var x = 1; x <= 5; x++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(x);
    }
    console.log('closures');
}
a();

*/
