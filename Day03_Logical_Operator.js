console.clear();
let s2 = true;
let s3 = true;
console.log(`1.Expected: true Got: ${s2 && true}`)  
console.log(`2.Expected: true Got: ${s2 && s3}`)
console.log(`3.Expected: false Got: ${s2 && s3 && false}`)
s3 = false
console.log(`4.Expected: true Got: ${s2 || s3 || false}`)
s3 = null;
console.log(`5.Expected: null Got: ${s2 && s3}`)
console.log(` 6.Expected: true Got: ${s2 || s3}`)
console.log( `7.Expected: False Got: ${!s2}`)
console.log(`8.Expected: True Got: ${!s3}`)