export default function timer() {
  const callElem = className => document.querySelector(className);
  const days = callElem("#days");
  const hours = callElem("#hours");
  const minutes = callElem("#minutes");
  const seconds = callElem("#seconds");

  const interval = setInterval(() => {
    showTime();
    console.log("salam");
  }, 1000);

  function showTime() {
    const currentTime = new Date();
    const deadline = new Date("10-30-2022");
    const time = deadline - currentTime;

    if (time <= 0) {
      clearInterval(interval);
      days.textContent = zero(0);
      hours.textContent = zero(0);
      minutes.textContent = zero(0);
      seconds.textContent = zero(0);
    } else {
      days.textContent = zero(Math.floor(time / (1000 * 60 * 60 * 24)));
      hours.textContent = zero(Math.floor((time / (1000 * 60 * 60)) % 24));
      minutes.textContent = zero(Math.floor((time / (1000 * 60)) % 60));
      seconds.textContent = zero(Math.floor((time / 1000) % 60));
    }
  }

  function zero(data) {
    return data < 10 ? "0" + data : data;
  }
}
