// HOMEWORK 1

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const superLink = document.getElementById("super_link");
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardLink = document.querySelectorAll(".card-link");
cardLink.forEach((element) => {
  element.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardLink2 = document.querySelectorAll(".card-body .card-link");
console.log(cardLink2);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const attributeDataNumber = document.querySelector('[data-number="50"]');
console.log(attributeDataNumber);

// 5. Выведите содержимое тега title в консоль.

console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const parentCardtitle = document.querySelector(".card-title");
console.log(parentCardtitle.parentNode);

// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const newElement = document.createElement("p");
newElement.textContent = "Привет";
document.querySelector(".card").prepend(newElement);

// 8. Удалите тег h6 на странице.
const titleSix = document.querySelector("h6");
titleSix.remove();
