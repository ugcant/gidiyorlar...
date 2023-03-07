const countDown = () => {
  const countDate = new Date("May 14, 2023 07:00:00").getTime();
  const now = new Date().getTime();
  const diff = countDate - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(diff / day);
  const textHour = Math.floor((diff % day) / hour);
  const textMin = Math.floor((diff % hour) / minute);
  const textSec = Math.floor((diff % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMin;
  document.querySelector(".second").innerText = textSec;
};

setInterval(countDown, 1000);
