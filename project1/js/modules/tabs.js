export default function tabs(headerSelector, contentSelector) {
  const tabItem = document.querySelectorAll(headerSelector);
  const tabContent = document.querySelectorAll(contentSelector);
  showContent();
  controlTab();

  function showContent(i = 0) {
    tabContent.forEach(item => (item.style.display = "none"));
    tabContent[i].style.display = "block";

    tabItem.forEach(item => item.classList.remove("tabheader__item_active"));
    tabItem[i].classList.add("tabheader__item_active");
  }

  function controlTab() {
    for (let i = 0; i < tabItem.length; i++) {
      tabItem[i].addEventListener("click", () => {
        showContent(i);
      });
    }
  }
}
