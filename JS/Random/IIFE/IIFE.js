let sum = (function(a, b) {
    return a+b;
})(10,130);
console.log(sum);

(function(){
    console.log("Haloo ini Immediatly Invoked Function Expression")
})();

(() => {
    console.log("Ini Arrow Function")
})();

(() => {
    let counter = 0;
    function sum(a, b) {
        return a+b;
    }
    console.log(sum(10,30));
})();

(function IIFE(){
    console.log('Coba Function Panggil Luar');
})();

IIFE(); // gabisa dipanggil