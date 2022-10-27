const tabHeaderItem = document.querySelectorAll(".tab-header-item");
const tabContentItem = document.querySelectorAll(".tab-content");

showContent();
controlTab();

function showContent(i = 0) {
  tabContentItem.forEach(item => {
    item.style.display = "none";
  });

  tabContentItem[i].style.display = "block";
}

function controlTab() {
  // tabHeaderItem.forEach((item, i) => {
  //     item.addEventListener('click', (e) => {
  //         showContent(i)
  //     })
  // })

  for (let i = 0; i < tabHeaderItem.length; i++) {
    tabHeaderItem[i].addEventListener("click", () => {
      showContent(i);
    });
  }
}
