export function sum(array) {
  try{
    let result = 0
    for(const value of array){
      result += value
    }
    return result

  }catch(error){
    return NaN
  }
}

export function product(array) {
  try{
    let result = 1
    for(let value of array){
      result *= value
    }
    return result

  }catch(error){
    return NaN
  }
}

export function sumOdds(array) {
  try{
    let cont = 0
    for(const value of array){
      if(value % 2 != 0){
        cont+= value
      }
    }
    return cont
  }catch(error){
    return NaN
  }
}
