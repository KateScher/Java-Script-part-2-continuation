/* Урок 10. Семинар. Работа с JSON

Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.

Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка, заголовок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию).*/

const newData = JSON.parse(data);
console.log(newData);

const divContentElem = document.querySelector(".content");

// пробежимся по массиву newData с пом. forEach и каждый элемент
// массива (т.е. объекты) будем вставлять внутрь div'a
newData.forEach((element) => {
  divContentElem.insertAdjacentHTML(
    "beforeend",
    `
<div class='wrapper'>
  <img>${element.image}</img>
  <h1>${element.ship_name}</h1>
  <p>${element.home_port}</p>
  <p>${element.position.latitude}</p>
</div>
`
  );
});
