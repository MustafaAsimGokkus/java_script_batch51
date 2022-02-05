/*
var x=10
let xx=11
if(true){
  var y=20
  let yy = 22
}
console.log(y);  //20
console.log(x);    //10
console.log(xx);   //11
console.log(yy);   //"ReferenceError: yy is not defined at radimogivo.js:10:38
  
if (x==10){
  console.log(y)
}


console.clear()
let age = 10
console.log(age)

 age = 20
console.log(age)

console.clear()

const pi = 3.14

console.log(pi)
//const pi=10
console.log(pi); //"SyntaxError: Identifier 'pi' has already been declared
 

console.clear()

let x = 12
let y =3
console.log(x++);//12
console.log(x);//13
console.log(y)
console.log(++x); //14

x++
console.log(x)//15
x+=5
console.log(x)
x*=2
console.log(x)//40

x/=3
console.log(x); //13.333333333333334
console.clear()
console.log(y--); //3
console.log(y); //2
console.log(--y);//1

y+=9
y%=4; //2
console.log(y%4);//2
console.log(y**3); //8

*/
console.clear()
let z = 3
const k = z++
console.log(z)//4
console.log(k)//3


/*
Rounding numbers 
Math.ceil(number)   -> Rounds up
Math.floor(number)  -> Rounds down
math.round(number)  -> Rounds to the closest whole number
10.4 -> 10    10.6->11
number.toFixed(numberofdigit) -> Rounds to the number of digit
14.5436456.toFixed(2) -> 14.54
16.3426461.toFixed(3) -> 16.343
*/

console.clear()
let myFavNum = 15.4567
let CeiledNum = Math.ceil(myFavNum)
console.log(CeiledNum); // 16

let flooredNum = Math.floor(myFavNum)
console.log(flooredNum)//15

let roundedNum = Math.round(myFavNum)
console.log(roundedNum)

let fixedNum = myFavNum.toFixed(2)
console.log(fixedNum)//15.46
console.log(typeof fixedNum) //returns result as a string