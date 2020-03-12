/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){

  const miliTime = parseInt(timeString);
  if (miliTime < 12 && miliTime > 0)
  return "Good Morning"
  if (miliTime > 12 && miliTime < 17)
  return "Good Afternoon"
  if (miliTime > 17 && miliTime < 24)
  return "Good Evening"
  else 
  return "Your time entry is not valid. Please reenter your time"
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}