console.clear()
//reduce function
//it accumulates all the values of an array

var numbers = [0,1,1,2,3,5,8]


//   numbers.reduce(
//   function(accumulator,eachNumber){
//     console.log('accumulator: '+accumulator)
//     console.log('each number: '+eachNumber)
//     return eachNumber+accumulator
//     }
//   )

var result = numbers.reduce(

   (accumulator,eachNumber)=>accumulator + eachNumber


)