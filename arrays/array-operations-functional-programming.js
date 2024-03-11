export function sum(array) {
  try{
    /*
    let result = 0
    for(const value of array){
      result += value
    }
    return result
    */
    
    return array.reduce((acc, value) => acc += value, 0)

  }catch(error){
    return NaN
  }
}

export function product(array) {
  try{
    /*
    let result = 1
    for(let value of array){
      result *= value
    }
    return result
    */

    return array.reduce((acc, value) => acc *= value, 1)

  }catch(error){
    return NaN
  }
}

export function sumOdds(array) {
  try{
    /*
    let cont = 0
    for(const value of array){
      if(value % 2 != 0){
        cont+= value
      }
    }
    return cont
    */

    return array.filter((x) => x & 1).reduce((acc, value) => acc += value, 0)

  }catch(error){
    return NaN
  }
}
