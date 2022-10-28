import tabs from "./modules/tabs.js";
import modal from "./modules/modal.js";
import timer from "./modules/timer.js";

window.addEventListener("DOMContentLoaded", () => {
  tabs(".tabheader__item", ".tabcontent");

  modal(".modal", ".modal__close", ".header__right-block button");
  modal(".modal", ".modal__close", ".offer__action button");

  timer();
});
