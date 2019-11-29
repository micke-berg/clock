const secondHand = document.querySelector('.sec-spinner');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setClock() {
  const currentDate = new Date();

  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 ;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);

};

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();

setInterval(setClock, 1000);