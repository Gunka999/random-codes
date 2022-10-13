const inputName = document.querySelector(".input-name"),
  inputMail = document.querySelector(".input-mail"),
  btn = document.querySelector(".btn"),
  form = document.querySelector("form"),
  personData = document.querySelector(".person-data");

form.addEventListener("submit", e => {
  e.preventDefault(); //form enter basanda yenilenmesinin qarsisinin alinmasi

  const person = {
    inputId: new Date()
      .getTime()
      .toString()
      .slice(4, 16),
    inputName: inputName.value,
    inputMail: inputMail.value
  };

  setLS(person);
  UI(person);
});

function getLS() {
  let arr = null;
  if (localStorage.getItem("person") === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("person"));
  }
  return arr;
}

function setLS(obj) {
  let arr = getLS();
  arr.push(obj);

  localStorage.setItem("person", JSON.stringify(arr));
}

function UI(person) {
  personData.innerHTML += `
    <tr  data-id=${person.inputId}>
      <td>${person.inputName}</td>
      <td>${person.inputMail}</td>
      <td><i class="fa-solid fa-trash"></i></td>
      <td><i class="fa-solid fa-edit"></i></td>
    </tr>`;
}

showLS();
function showLS() {
  let person = getLS();
  UI(person);
  for (i = 0; i < person.length; i++) {
    UI(person[i]);
  }
}
