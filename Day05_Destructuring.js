console.clear()
// we will learn de-structuring

  var user = {
    firstName:'Sam',
    lastName : 'Collin',
    isEmployed : true,
     theLocation: 'New Jersey'

  }
//regular way of getting elements
//   console.log(user.firstName)
// console.log(user.lastName)
// console.log(user.isEmployed)
// console.log(user.lastName)

 var {firstName,lastName,isEmployed,theLocation} = user
 
  console.log(firstName)
  console.log(lastName)
  console.log(isEmployed)
  console.log(theLocation)

 function getUser (){
   return{
     name2:    'Sam',
     location2:'NYC',
     email:    'sam@gmail.com'
   }
 }

var {name2,location2,email} = getUser()
console.log(name2)
console.log(location2)
console.log(email)

var user2 = ['Tim','LA','tim@gmail.com']
console.log(user2[0])
console.log(user2[1])
console.log(user2[2])
var[userName1,userLocation1,userEmail1] = user2
console.log(userName1)
console.log(userLocation1)
console.log(userEmail1)