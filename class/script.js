class UI {
  constructor(inputName, inputMail, form, btn, personData) {
    this.inputName = document.querySelector(".inputName");
    this.inputMail = document.querySelector(".inputMail");
    this.form = document.querySelector("form");
    this.btn = document.querySelector(".btn");
    this.personData = document.querySelector(".personData");
    this.tbody = document.querySelector("tbody");
    this.tbody.addEventListener("click", this.deleteOrUpdate.bind(this));

    this.form.addEventListener("submit", this.createPerson.bind(this));
    this.showLS();
    this.mode = "create";
    this.oldUser;
    this.IdPerson;
    this.normalizeBtn();
  }

  normalizeBtn() {
    if (this.mode === "create") {
      this.btn.style.backgroundColor = "green";
      this.btn.textContent = "create";
    } else if (this.mode === "update") {
      this.btn.style.backgroundColor = "red";
      this.btn.textContent = "Update";
    }
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

    if (this.mode === "create") {
      if (this.person.inputName && this.person.inputMail) {
        this.UIData(this.person);
        this.setLS(this.person);
        this.inputName.value = "";
        this.inputMail.value = "";
      }
    }

    if (this.mode === "update") {
      this.person.inputID = this.oldUser.getAttribute("data-id");
      this.oldUser.innerHTML = `
        <td>${this.person.inputName}</td>
        <td>${this.person.inputMail}</td>
        <td><i class="fa-solid fa-trash"></i></td>
        <td><i class="fa-solid fa-edit"></i></td>`;
      this.updateFromLS(this.person, this.person.inputID);
      this.mode = "create";
      this.normalizeBtn();
      this.inputName.value = "";
      this.inputMail.value = "";
    }
    // console.log(this.inputMail.value);
  }

  deleteOrUpdate(e) {
    const target = e.target;
    if (e.target.classList.contains("fa-trash")) {
      const { el, id } = getData(target);
      el.remove();
      this.deletFromLS(id);
    }

    if (e.target.classList.contains("fa-edit")) {
      const { el, id } = getData(target);
      this.IdPerson = el.getAttribute("data-id");

      // console.log(el.children[0].textContent);
      // console.log(el.children[1].textContent);

      this.inputName.value = el.children[0].textContent;
      this.inputMail.value = el.children[1].textContent;
      this.mode = "update";

      this.oldUser = el;
      this.normalizeBtn();
    }

    function getData(target) {
      return {
        el: target.parentElement.parentElement,
        id: target.parentElement.parentElement.getAttribute("data-id")
      };
    }
  }

  getLS() {
    let arr;
    if (localStorage.getItem("person") === null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("person"));
    }
    return arr;
  }

  setLS(obj) {
    let arr = this.getLS();
    arr.push(obj);

    localStorage.setItem("person", JSON.stringify(arr));
  }

  deletFromLS(id) {
    const arr = this.getLS();
    const newArr = arr.filter(el => el.inputID !== id);
    localStorage.setItem("person", JSON.stringify(newArr));
  }

  updateFromLS(obj, id) {
    const data = this.getLS();
    for (let i = 0; i < data.length; i++) {
      if (data[i].inputID == id) {
        data[i] = obj;
      }
    }
    localStorage.setItem("person", JSON.stringify(data));
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
    // this.UIData(person);
    for (let i = 0; i < this.person.length; i++) {
      this.UIData(this.person[i]);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new UI(".inputName", ".inputMail", ".form", ".btn", ".personData");
});
