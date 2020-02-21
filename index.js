/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
function greet(time){
  const timeInt = time.split(':').join('')
  if ( timeInt < 1200){
    return "Good Morning"
  } else if (timeInt > 1200 && timeInt < 1500) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(inputMessage){
  let message = document.querySelector("#greeting")
  message.innerText = inputMessage
}