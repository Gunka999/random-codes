const inputName = document.querySelector(".input-name");
const inputMail = document.querySelector(".input-mail");
const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const personData = document.querySelector(".person-data");

// console.log(personData);
let mode = "create";

function normalizeButton() {
  if (mode === "create") {
    btn.style.backgroundColor = "green";
    btn.textContent = "Create";
  } else if (mode === "update") {
    btn.style.backgroundColor = "aqua";
    btn.textContent = "update";
  }
}

normalizeButton();

form.addEventListener("submit", e => {
  e.preventDefault();
  // const value = input.value;

  const person = {
    inputId: new Date()
      .getTime()
      .toString()
      .slice(4, 16),
    inputName: inputName.value,
    inputMail: inputMail.value
  };
  if (mode === "create") {
    if (person.inputName && person.inputMail) {
      setLS(person);
      UI(person);
      inputName.value = "";
      inputMail.value = "";
    }
  }
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
  personData.innerHTML += `
  <tr  data-id=${person.inputId}>
    <td>${person.inputName}</td>
    <td>${person.inputMail}</td>
    <td><i class="fa-solid fa-trash"></i></td>
    <td><i class="fa-solid fa-edit"></i></td>
  </tr>`;
}

personData.addEventListener("click", e => {
  const target = e.target;

  const tr = target.parentElement.parentElement;

  if (target.classList.contains("fa-trash")) {
    deleteFromLS(tr.getAttribute("data-id"));
    tr.remove();
  }
  if (target.classList.contains("fa-edit")) {
    inputName.value = tr.children[0].textContent;
    inputMail.value = tr.children[1].textContent;

    mode = "update";
    normalizeButton();
  }
});

function deleteFromLS(id) {
  const data = getLS();

  for (let i = 0; i < data.length; i++) {
    if (data[i].inputId === id) {
      data.splice(i, 1);
      //   console.log(data);
    }
  }

  localStorage.setItem("person", JSON.stringify(data));
}

// deleteFromLS();
