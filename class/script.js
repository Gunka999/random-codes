class UI {
  constructor(inputName, inputMail, form, btn, personData) {
    this.inputName = document.querySelector(".inputName");
    this.inputMail = document.querySelector(".inputMail");
    this.form = document.querySelector("form");
    this.btn = document.querySelector(".btn");
    this.personData = document.querySelector(".personData");

    this.form.addEventListener("submit", this.createPerson.bind(this));
  }

  createPerson(e) {
    e.preventDefault();

    this.person = {
      inputID: new Date()
        .getTime()
        .toString()
        .slice(4, 16),
      inputName: this.inputName.value,
      inputMail: this.inputMail.value
    };

    // console.log(this.inputMail.value);

    this.UIData(this.person);
    this.setLs(this.person);
    this.showLS();
  }

  getLs() {
    this.arr = null;
    if (localStorage.getItem("person") === null) {
      this.arr = [];
    } else {
      this.arr = JSON.parse(localStorage.getItem("person"));
    }
    return this.arr;
  }

  setLs(obj) {
    this.arr = this.getLs();
    this.arr.push(obj);

    localStorage.setItem("person", JSON.stringify(this.arr));
  }

  UIData(person) {
    this.personData.innerHTML += `
      <tr  data-id=${person.inputID}>
        <td>${person.inputName}</td>
        <td>${person.inputMail}</td>
        <td><i class="fa-solid fa-trash"></i></td>
        <td><i class="fa-solid fa-edit"></i></td>
      </tr>`;
  }

  showLS() {
    this.person = this.getLS();
    this.UIData(person);
    for (i = 0; i < this.person.length; i++) {
      this.UIData(this.person[i]);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new UI(".inputName", ".inputMail", ".form", ".btn", ".personData");
});
