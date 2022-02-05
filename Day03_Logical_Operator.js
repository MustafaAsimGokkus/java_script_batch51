console.clear();
let s2 = true;
let s3 = true;
console.log(s2 && true); //true
console.log(s2 && s3);  // true
console.log(s2 && s3 && false); // false
s3 = false;
console.log(s2 || s3 || false);//true
s3 = null; 
console.log( s2 && s3); //false(null)
console.log(s2 || s3); // true
console.log(!s2); //false
console.log(!s3); //false(true)

console.log(!s3);//false(true)

console.log(`compare: ${s2 && null}`); 