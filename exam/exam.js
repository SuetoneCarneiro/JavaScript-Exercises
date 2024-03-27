export class Exam {
  constructor(weight, answer){
    this.weight = weight
    this.answer = answer
    this.exams = []
  }

  add(exam){ //NÃO FUNCIONA
    let grade = 0
    for(let q in this.exams.values){
      grade += (exam.values[q] === this.answer.values[q]) ? this.weight[q] : 0 // Operador ternáio estranho pra mim
    }
    exam.grade = grade // adicionando algo novo ao objeto
    this.exams.push(exam)
  }
  avg(){
    let acc = 0
    for(let exam of this.exams){ // Vai usar em todas as outras funções
      acc += exam.grade
    }
    let avg = acc/this.exams.length
    return avg
  }
  min(){
    let min = 100000
    let res = []
    for(let exam of this.exams){
      if(exam.grade < min){
        min = exam.grade
      }
    }
    res.push(min)
    return res
  }
  max(){
    let max = 0
    let res = []
    for(let exam of this.exams){
      if(exam.grade > max){
        max = exam.grade
      }
    }

    if(max != 0){
      res.push(max)
    }

    return res
  }
  lt(comp){
    let array_res = []
    for(let exam of this.exams){
      if(exam.grade < comp){
        array_res.push(exam.grade)
      }
    }
    return array_res
  }
  gt(comp){
    let array_res = []
    for(let exam of this.exams){
      if(exam.grade > comp){
        array_res.push(exam.grade)
      }
    }
    return array_res
  }
}
