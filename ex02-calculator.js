// https://ifpb.github.io/exercises/problems/function-calc/

//Arrow function
const calculator = (n1, n2, op) => {
    switch (op){
        case '+':
            return n1 + n2; 
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2; 
        case '/':
            return n1 / n2;
    }
}

console.log(calculator(1,1,'+'));
console.log(calculator(1,1,'-'));
console.log(calculator(1,1,'*'));
console.log(calculator(1,1,'/'));
