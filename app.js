const keys = document.querySelectorAll(".container__body__keys");
const deleteKey = document.getElementsByClassName("container__body__delete")[0];
const calcKey = document.getElementsByClassName("container__body__calc")[0];
const resetKey = document.getElementsByClassName("container__body__reset")[0];
const result = document.getElementsByClassName("container__result")[0];
const btns = document.querySelectorAll(".checkbox");
const roundSlider = document.querySelector(".round-slider");
let resultBrut;
const body = document.querySelector("body");

console.log(body.dataset);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.theme === "1") {
      body.setAttribute("data-theme", 1);
      roundSlider.style.left = "6px";
    }
    if (btn.dataset.theme === "2") {
      body.setAttribute("data-theme", 2);
      roundSlider.style.left = "29px";
    }
    if (btn.dataset.theme === "3") {
      roundSlider.style.left = "52px";
      body.setAttribute("data-theme", 3);
    }
  });
});

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    if (e.target.textContent === "x") {
      result.textContent += "*";
    } else if (result.textContent === "0") {
      result.textContent = e.target.textContent;
    } else if (result.textContent.length > 13) {
      result.textContent = result.textContent.substring(0, 15);
    } else {
      result.textContent += e.target.textContent;
    }
  });
});

deleteKey.addEventListener("click", () => {
  let arr = result.textContent.split("");
  let newArr = arr.slice(0, arr.length - 1);
  result.textContent = newArr.join("").toString();
});

calcKey.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
  if (result.textContent.length > 15) {
    result.textContent = result.textContent.substring(0, 15);
  }
});

resetKey.addEventListener("click", () => {
  result.textContent = 0;
});

console.log(window.matchMedia("prefers-color-scheme").media);

if (window.matchMedia("prefers-color-scheme").media !== "not all") {
  console.log("color scheme works");
}
