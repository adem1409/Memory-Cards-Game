let cards = document.querySelectorAll(".card");
let wrongTries = document.querySelector(".wrongNum");
let username = document.querySelector(".username");
let userInput = prompt("Enter Your Username : ");
username.innerHTML = userInput;
let currents = [];
function numberActive() {
  let c = 0;
  cards.forEach((e) => {
    if (e.classList.contains("active")) {
      c++;
    }
  });
  return c;
}
function removeAllActive() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
function filp(element) {
  if (numberActive() < 2) {
    element.classList.add("active");
    currents.push(element);
    element.style.pointerEvents = "none";
  }
  setTimeout(() => {
    if (currents.length == 2) {
      if (currents[0].dataset.index == currents[1].dataset.index) {
        currents[0].classList.add("done");
        currents[1].classList.add("done");
      } else {
        wrongTries.innerHTML = wrongTries.dataset.try++;
        currents[0].style.pointerEvents = "initial";
        currents[1].style.pointerEvents = "initial";
      }
      removeAllActive();
      currents.length = 0;
    }
    console.log(currents);
  }, 1000);
}
cards.forEach((e) => {
  e.addEventListener("click", () => {
    filp(e);
  });
});
