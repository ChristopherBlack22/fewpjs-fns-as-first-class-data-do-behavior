/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  if (parseInt(timeString.split(":")[0], 10) < 12) {
    return "Good Morning"
  }
  if (parseInt(timeString.split(":")[0], 10) > 17) {
    return "Good Evening"
  }
  return "Good Afternoon"
}

function displayMessage(greet) {
  const greeting = document.getElementById("greeting")
  greeting.innerHTML = greet
}