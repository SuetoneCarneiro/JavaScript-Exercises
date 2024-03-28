export class Exam {
  constructor(answer, weight){
    this.weight = weight
    this.answer = answer
    this.exams = []
  }

  add(exam){
    
    exam.grade = Object.keys(exam.values).reduce((acc, q) => {
      return (acc + (exam.values[q] === this.answer.values[q] ? this.weight[q] : 0))
    }, 0)
    
    this.exams.push(exam)
  }
  
  avg(){
    let sum = (this.exams.reduce((acc, exam) => acc + exam.grade, 0))
    return sum/this.exams.length
  }

  min(){
    return Array.of(this.exams.reduce((min,exam) => min = exam.grade < min ? exam.grade : min, 1000))
  }

  max(){
    return Array.of(this.exams.reduce((max, exam) => max = exam.grade > max ? exam.grade : max, 0))
  }

  lt(comp){
    let grades = this.exams.map((answer) => answer.grade)
    return grades.filter((grade) => grade < comp)
  }

  gt(comp){
    let grades = this.exams.map((answer) => answer.grade)
    return grades.filter((grade) => grade > comp)

  }
}
