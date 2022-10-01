const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.querySelector(".container");
const silmek = document.querySelector("span");

form.addEventListener("submit", e => {
  e.preventDefault();
  // const value = input.value;
  screen(input.value);
  setLS(input.value);
});

function getLS() {
  let arr;
  if (localStorage.getItem("table") == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("table"));
  }
  return arr;
}

function setLS(text) {
  const storage = getLS();
  storage.push(text);
  localStorage.setItem("table", JSON.stringify(storage));
}

const arr = getLS();

for (let i = 0; i < arr.length; i++) {
  screen(arr[i]);
}

function screen(value) {
  const text = document.createElement("p");
  // text.textContent = value;
  text.innerHTML = `'${value}<span><i class="fa-solid fa-trash"></i></span>`;
  container.appendChild(text);
}
