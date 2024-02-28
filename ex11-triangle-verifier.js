// https://ifpb.github.io/exercises/problems/function-triangle-checker/

// A é sempre o maior valor

function triangleChecker(a,b,c){
    
    const valuesArray = [a,b,c];
    valuesArray.join()
    valuesArray.sort()

    a = valuesArray[2]
    b = valuesArray[1]
    c = valuesArray[0]

    if(a >= b + c){
        return 'none'
    }else if(a == b && b == c){
        return 'equilateral'
    }else if(a == b || b == c || c == a){
        return 'isosceles'
    }else{
        return 'scalene'
    }
}

console.log(triangleChecker(2, 2, 2))
console.log(triangleChecker(10, 10,10))
console.log(triangleChecker(3, 4, 4))
console.log(triangleChecker(4, 3, 4))	
console.log(triangleChecker(4, 4, 3))	
console.log(triangleChecker(10, 10, 2))
console.log(triangleChecker(3, 4, 5))
console.log(triangleChecker(10, 11, 12))
console.log(triangleChecker(5, 4, 2))
console.log(triangleChecker(0, 0, 0))
console.log(triangleChecker(3, 4, -5))
console.log(triangleChecker(1, 1, 3))
console.log(triangleChecker(2, 4, 2))
