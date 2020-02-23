/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let splitTime = time.split(":")
  let joinedTime = splitTime.join("")
  let intTime = parseInt(joinedTime)

  if (intTime < 1200) {
    return "Good Morning"
  }
  else if (intTime > 1200 && intTime < 1700) {
    return "Good Afternoon"
  }
  else {return "Good Evening"}
}

// If the time is earlier than 12:00, return "Good Morning".
// If the time is between 12:00 and 17:00, return "Good Afternoon".
// If the time is later than 17:00, return "Good Evening".

// console.log(time)
// console.log (splitTime)
// console.log (joinedTime)
// console.log (typeof(intTime))
// console.log (intTime)

// if (time < 12:00) {
//   return "Good Morning"
// }

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  console.log(string)
  const greeting = document.querySelector("#greeting")
  console.log(greeting.textContent)
  greeting.innerText = string 
}
