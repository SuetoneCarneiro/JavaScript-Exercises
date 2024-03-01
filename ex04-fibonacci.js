// Recursive Fibonacci function
function Fibonacci(n){
    if(n == 1){
        return 0;
    }
    if(n == 2){
        return 1;
    }
    return Fibonacci(n-1) + Fibonacci(n-2);
}

let fib_array = []

for(let i = 1; i <= 20;i++){
    fib_array.push(Fibonacci(i));
}


console.log('Fibonnacci sequence: ', fib_array, '...');
