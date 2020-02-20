/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
  console.log("I'm working")
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let hour = parseInt(time,10)

  if (hour < 12) {return "Good Morning";}
  if (hour < 17) {return "Good Afternoon";}
  else {return "Good Evening";}
}


/* Write your implementation of displayMessage() */
function displayMessage(msg){
let test = document.querySelector("#greeting").innerText = msg
return test;

}


