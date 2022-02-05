/* String manipulation
Ask the user to enter a tweet, and calculate the number of sent and 
remaining characters. Note:Max char is 280
*/
console.clear()
let tweet = prompt("Throw a tweet")
let tweetLength = tweet.length
const maxLength = 280


console.log(`Sent: ${tweetLength}, Remaining: 
${maxLength-tweetLength}`)
//console.clear()
let text = 'Hello World, welcome to javascript'
let result = text.indexOf('welcome')
console.log(result)