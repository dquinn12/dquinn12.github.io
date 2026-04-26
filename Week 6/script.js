document
  .getElementById("greeting")
  .addEventListener("click", function (event) {
    console.log(event);
    response1.innerHTML = "Hi! I am a website! whats your name?";
    document.getElementsByClassName("textbox2")[0].style.left = "0px";
  });
  document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    response2.innerHTML = `Hello there ${document.getElementById('namer').value}! Of the ones listed... whats your favorite color?`;
    document.getElementsByClassName("textbox3")[0].style.left = "0px";
  }
});
document
  .getElementById("red")
  .addEventListener("click", function (event) {
    console.log(event);
    document.body.style.backgroundColor = "red";
    response3.innerHTML = "Ta-dah! what do you think?";
  });
document
  .getElementById("yellow")
  .addEventListener("click", function (event) {
    console.log(event);
    document.body.style.backgroundColor = "yellow";
    response3.innerHTML = "Ta-dah! what do you think?";
  });
document
  .getElementById("blue")
  .addEventListener("click", function (event) {
    console.log(event);
    document.body.style.backgroundColor = "blue";
    response3.innerHTML = "Ta-dah! what do you think?";
  });