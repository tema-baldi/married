// const changeHeight = () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh',`${vh}px`);
// };
// changeHeight();

// window.addEventListener('resize', () => {
//   changeHeight();
// });

(function () {
  let width = window.innerWidth;
  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    setTimeout(() => {
      if (width != window.innerWidth) {
        let vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        width = window.innerWidth;
      }
    }, 50);
  });
})();

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const timerBox = document.querySelector('.timer__inner');
const preLoader = document.querySelector('.lds-hourglass');

function updateTimer() {
  const weddingDay = new Date(`September 08 2023 00:00:00`);
  const currentDay = new Date();
  const timer = weddingDay - currentDay;

  const daysTimer = Math.floor(timer / 1000 / 60 / 60 / 24);
  const hoursTimer = Math.floor(timer / 1000 / 60 / 60) % 24;
  const minutesTimer = Math.floor(timer / 1000 / 60) % 60;
  const secondsTimer = Math.floor(timer / 1000) % 60;

  days.innerText = daysTimer < 10 ? '0' + daysTimer : daysTimer;
  hours.innerText = hoursTimer < 10 ? '0' + hoursTimer : hoursTimer;
  minutes.innerText = minutesTimer < 10 ? '0' + minutesTimer : minutesTimer;
  seconds.innerText = secondsTimer < 10 ? '0' + secondsTimer : secondsTimer;
}

setInterval(updateTimer, 1200);

setTimeout(function () {
  timerBox.style.display = 'block';
}, 1200)

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [45.035390, 41.901165],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 17
  });
  // var myPlacemark = new ymaps.Placemark([45.035390, 41.901165], {}, {
  //   iconLayout: 'default#image',
  //   iconImageHref: './../images/location.svg',
  //   iconImageSize: [55, 55],
  //   iconImageOffset: [-25, -45]
  // });

  var myPlacemark = new ymaps.Placemark([45.035390, 41.901165]);
  // myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	// myMap.controls.remove('searchControl'); // удаляем поиск
	myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	myMap.controls.remove('typeSelector'); // удаляем тип

	// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	myMap.controls.remove('rulerControl'); // удаляем контрол правил
	myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  myMap.geoObjects.add(myPlacemark);
}
