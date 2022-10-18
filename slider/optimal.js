const callElem = className => document.querySelector(className);
const callElems = className => document.querySelectorAll(className);

const slider = callElem(".slider");
const sliderHeader = callElem(".slider__header");
const sliderWrapper = callElem(".slider__wrapper");
const sliderInner = callElem(".slider__inner");
const sliderItems = callElems(".slider__item");
const sliderController = callElem(".slider__controller");
const sliderDots = callElem(".slider__dots");
const prev = callElem(".fa-chevron-left");
const next = callElem(".fa-chevron-right");
const current = callElem(".current");
const total = callElem(".total");

const width = sliderWrapper.offsetWidth;
const dotsArr = [];

let offset = 0;
let sira = 1;

init();
getCurrentRow();
dots();

// Hal hazırki sıranın alınması
function getCurrentRow() {
  if (sira < 10) {
    current.textContent = `0${sira}`;
  } else {
    current.textContent = sira;
  }
}

// Optimallaşdırma
function optimizeChange(sira) {
  dotsArr.forEach(dot => dot.classList.remove("active"));
  dotsArr[sira - 1].classList.add("active");
  sliderInner.style.transform = `translateX(-${offset}px)`;
  getCurrentRow();
}

function dots() {
  const sliderDots = document.createElement("div");
  sliderDots.className = "slider__dots";
  const ol = document.createElement("ol");

  for (let i = 0; i < sliderItems.length; i++) {
    const li = document.createElement("li");

    if (i == 0) {
      li.classList.add("active");
    }

    dotsArr.push(li);

    li.addEventListener("click", () => {
      offset = i * width;
      sira = i + 1;

      optimizeChange(sira);
    });

    ol.append(li);
  }

  sliderDots.append(ol);
  sliderWrapper.append(sliderDots);
}

// Statik datalar (səhifə açılanda)
function init() {
  sliderInner.style.width = width * sliderItems.length + "px";
  if (sliderItems.length < 10) {
    total.textContent = `0${sliderItems.length}`;
  } else {
    total.textContent = sliderItems.length;
  }
}

next.addEventListener("click", _ => {
  if (offset == width * (sliderItems.length - 1)) {
    offset = 0;
    sira = 1;
  } else {
    offset += width;
    sira += 1;
  }

  optimizeChange(sira);
});

prev.addEventListener("click", _ => {
  if (offset == 0) {
    offset = width * (sliderItems.length - 1);
    sira = sliderItems.length;
  } else {
    offset -= width;
    sira -= 1;
  }

  optimizeChange(sira);
});
