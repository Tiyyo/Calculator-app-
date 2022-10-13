const keys = document.querySelectorAll(".container__body__keys");
const deleteKey = document.getElementsByClassName("container__body__delete")[0];
const calcKey = document.getElementsByClassName("container__body__calc")[0];
const resetKey = document.getElementsByClassName("container__body__reset")[0];
const result = document.getElementsByClassName("container__result")[0];

console.log(keys);

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    if (e.target.textContent === "x") {
      result.textContent += "*";
    } else {
      result.textContent += e.target.textContent;
    }
  });
});

deleteKey.addEventListener("click", () => {
  let arr = result.textContent.split("");
  console.log(arr);
  console.log(arr.length);
  let newArr = arr.slice(0, arr.length - 1);
  console.log(newArr);
  result.textContent = newArr.join("").toString();
});

calcKey.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

resetKey.addEventListener("click", () => {
  result.textContent = 0;
});
