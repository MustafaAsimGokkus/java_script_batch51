 console.clear()
    
      // If I have a car I can go shopping
      // If I have a car I can go shopping
      //car is available bus is not available
      
      let car = true
      let bus = false
      
      if(car||bus){
        console.log("I can go shopping")
      }else{
        console.log("I can't go shopping")
      }
      console.clear()
    
    /*Ask user to provide the day of the week and print on the console if it is a 
    week day or weekend day
    */
    let day= prompt("Geben Sie einen Tag ein").toLowerCase()
   // console.log(day)
    
    let result = day == 'montag'|| day == 'dienstag'|| day == 'mittwoch'|| day == 'donnerstag'|| day == 'freitag'?
      "Es ist Arbeitstag" : day == 'samstag'|| day == 'sonntag'?"Es ist Wochenende!":"Bitte geben Sie den Tag korrekt ein!"
      
      console.log(result)
