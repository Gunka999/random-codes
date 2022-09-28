const inputName = document.querySelector(".input-name");
const inputMail = document.querySelector(".input-mail");
const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const personDate = document.querySelector(".person-data");

console.log(personDate);

form.addEventListener("submit", e => {
  e.preventDefault();
  // const value = input.value;

  const person = {
    inputName: inputName.value,
    inputMail: inputMail.value
  };
  setLS(person);
  UI(person);
});

function getLS() {
  let arr = null;
  if (localStorage.getItem("person") == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("person"));
  }
  return arr;
}

function setLS(obj) {
  let data = getLS();
  data.push(obj);

  localStorage.setItem("person", JSON.stringify(data));
}
UIDataSet();
function UIDataSet() {
  const arr = getLS();
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    UI(arr[i]);
  }
}

console.log(inputName.value);

function UI(person) {
  personDate.innerHTML += `
  <tr>
    <td>${person.inputName}</td>
    <td>${person.inputMail}</td>
    <td><i class="fa-solid fa-trash"></i></td>
  </tr>`;
}
// function removeLS() {}

// const arr = getLS();

// for (let i = 0; i < arr.length; i++) {
//   screen(arr[i]);
// }

// function screen(value) {
//   const text = document.createElement("p");
//   // text.textContent = value;
//   text.innerHTML = `'${value}<span><i class="fa-solid fa-trash"></i></span>`;
//   container.appendChild(text);
// }
