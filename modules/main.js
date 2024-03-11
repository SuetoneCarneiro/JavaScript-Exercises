import { derivative } from 'mathjs'
import {sum, subtract, multiply, divide} from './lib.js'

let a = 15
let b = 8

console.log(sum(a, b))
console.log(subtract(a, b))
console.log(multiply(a,b))
console.log(divide(a,b))

console.log(derivative('2x^3', 'x').toString())
