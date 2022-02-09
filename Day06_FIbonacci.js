console.clear()
//reduce function
//it accumulates all the values of an array

var numbers = [0,1,1,2,3,5,8]

let fibonacci_10 = []
let count = 10
let num1 = 0
let num2 = 1
let i =0
while(i<count){
  
  fibonacci_10.push(num1)
  let num3 = num1+num2
  num1 =num2
  num2 =num3
  i++
  
}
console.log(fibonacci_10)//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]