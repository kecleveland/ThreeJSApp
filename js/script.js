function outer(){
    var b = 10;
    function inner(){
        var a = 20;
        console.log(a+b);
    }

    return inner;
}

var X = outer(); //outer() invoked the first time
var Y = outer(); //outer() invoked the second time

console.log(X);
console.log(Y);