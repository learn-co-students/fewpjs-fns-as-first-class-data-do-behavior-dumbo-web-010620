/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  time = removeSemiColon(time)
  const parsedTime = parseInt(time)


  if (parsedTime < 1200) {
    return 'Good Morning';
  } else if (parsedTime > 1200 && parsedTime < 1700) {
    return 'Good Afternoon';
  } else if (parsedTime > 1700) {
    return 'Good Evening';
  }

}

function removeSemiColon (time) {
  let newTime = time.split(":")
  newTime = newTime.join('')
  return newTime;
}
/* Write your implementation of greet() */
function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting;

}
/* Write your implementation of displayMessage() */
