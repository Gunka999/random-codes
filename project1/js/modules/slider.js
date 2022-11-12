export default function slider() {
  const callElem = className => document.querySelector(className);
  const callElems = className => document.querySelectorAll(className);
  const offerSlider = callElem(".offer__slider");
  const offerSliderCounter = callElem(".offer__slider-counter");
  const offerSliderWrapper = callElem(".offer__slider-wrapper");
  const sliderInner = callElem(".slider___inner");
  const offerSlide = callElems(".offer__slide");
  const prev = callElem(".offer__slider-prev");
  const next = callElem(".offer__slider-next");
  const width = offerSliderWrapper.offsetWidth;
  //   console.log(offerSlide.length);
  //   //   console.log(sliderInner.length);
  //   console.log(width);

  let offset = 0;
  init();
  function init() {
    sliderInner.style.width = width * offerSlide.length + "px";
  }

  next.addEventListener("click", e => {
    if (offset == width * (offerSlide.length - 1)) {
      offset = 0;
    } else {
      offset += width;
    }
    sliderInner.style.transform = `translateX(-${offset}px)`;
  });

  prev.addEventListener("click", e => {
    if (offset == 0) {
      offset = width * (offerSlide.length - 1);
    } else {
      offset -= width;
    }

    sliderInner.style.transform = `translateX(-${offset}px)`;
  });
}
