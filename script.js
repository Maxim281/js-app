// Переменные
let generate = document.getElementById('generation');
let clear = document.getElementById('clear');
let bgcolor = document.getElementById('display');
let text = document.getElementById("text");

// Массивы
let colorArray = [
   "color1",
   "color2",
   "color3",
   "color4",
   "color5",
   "color6"
];
let textArray = [
   "Используя возможности JS написать обработку нажатия на кнопки. Для этого необходимо `найти` объект(кнопку) и записать его в переменную. После этого используя addEventListener навесить слушателя события - нажатия по кнопке, с последующей обработкой этого события. Такие действия сделать для каждой кнопки",
   "Обработчик для кнопки “Генерировать текст” должен применить на второй блок(Display) случайный стиль, написанный ранее из файла css. И вставить туда случайный текст(фразу) подготовленную  заранее, например в массиве.",
   "Описать 6 стилей в css файле, где каждый задаёт блоку цвет фона и цвет текста.",
   "Обработчик для кнопки “Очистить текст” должен удалить использованный класс на втором блоке(Display) и очистить содержимое блока.",
   "Если вы решили что сделали что-то не правильно, то перед удалением блоков - делайте коммит.",
   "Если работа не завершена, но вы закончили работать над заданием - делайте коммит."
];

// Случайный стиль
Array.prototype.randomColor = function () {
   return this[Math.floor(Math.random() * this.length)]
};
let myRandomColor = colorArray.randomColor();

// Случайный текст
Array.prototype.randomText = function () {
   return this[Math.floor(Math.random() * this.length)]
};
let myRandomText = textArray.randomText();

// Генерировать текст
generate.addEventListener('click', function () {
   bgcolor.classList.add(myRandomColor);

   text.innerHTML = myRandomText;
   bgcolor.insertAdjacentElement('afterbegin', text);

   text.style.display = 'block';
});

// Очистить текст
clear.addEventListener('click', function () {
   window.location.reload(true);
})