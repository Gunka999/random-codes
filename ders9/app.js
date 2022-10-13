import LS from "./ls.js";

class UI {
  constructor(container, form, tasksContainer, input) {
    // Helper Classes
    this.ls = new LS();

    // Assigns
    this.container = document.querySelector(container);
    this.form = document.querySelector(form);
    this.tasksContainer = document.querySelector(tasksContainer);
    this.input = document.querySelector(input);

    // Events
    this.form.addEventListener("submit", this.createTask.bind(this));

    // Screen
    this.screen();
  }

  createTask(e) {
    e.preventDefault();
    // const formObj = Object.fromEntries(new FormData(e.target))

    const h3 = document.createElement("h3");
    h3.textContent = this.input.value;

    this.tasksContainer.append(h3);
    this.ls.setLocalStorage(this.input.value);
  }

  screen() {
    const data = this.ls.getLocalStorage();

    for (let i = 0; i < data.length; i++) {
      const h3 = document.createElement("h3");
      h3.textContent = data[i];
      this.tasksContainer.append(h3);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new UI(".container", "form", ".tasksContainer", "input");
});
