// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// const btn1 = document.querySelector('.btn1');
// window.onload = () => {          // это обращение к глобальной переменной Window (а не к кнопке), здесь указываем, что должно происходить на момент загрузки страницы
//  console.log("страница загрузилась");
// }
// btn1.onclick = () => {
//  console.log('событие onclick');
// }
// btn1.addEventListener ("click", () => {
//  console.log("событие addEventListener");
// })

// 2й вариант от студента:
// <button id="myButton">Нажми меня</button>

// <script>
// const myButton = document.querySelector('#myButton');

// document.addEventListener('DOMContentLoaded', () => {
// console.log('Страница загрузилась');
// });

// myButton.onclick = ()=> {
// console.log('Событие onclick');
// };

// myButton.addEventListener('click', ()=> {
// console.log('Событие addEventListener');
// });
// </script>

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку, чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее
// нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую,
// меняется текст данной кнопки на “Вы нажали на эту кнопку”

const body = document.querySelector("body");
// for (let i = 1; i < 6; i++) {    // создадим 5 кнопок (1 пункт задания)
//     body.insertAdjacentHTML("beforeend", `<button>${i}</button>`);
// }

// слушаем событие клика у body (всех элементов), но в if указали только про BUTTON
// т.е. цель нажатия - только кнопка
// body.addEventListener("click",(e) => {   // 2й пункт задания
//     if(e.target.nodeName === "BUTTON") {  // условие на то, что делать, если нажали тег BUTTON
// nodeName - пишутся только прописными буквами
//         console.log(`Нажали на кнопку ${e.target.textContent} `);
//     }
// })
// 3й пункт задания
// const btns = document.querySelectorAll('button');
// let count = 0;
// btns[4].addEventListener("click", () => {
//     count++;
//     console.log(` На кнопку 4 нажали ${count} раз`);
// })

// btns[5].addEventListener("click", () => {
//     btns[5].textContent = "Вы нажали на эту кнопку"
// })

// Создать кнопку, которая добавляем заголовок h1 с текстом,
// “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться
// текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки,
// в консоли должен появиться текст “Наведения на кнопку больше нет”

// const btn = document.createElement("button");
// btn.textContent = "click me";
// body.insertAdjacentElement("beforeend", btn);   // beforeend - перед закрывающимся тегом body
// btn.addEventListener("click",() => {               // слушаем событие клика
//     body.insertAdjacentHTML("beforeend", `<h1>Новый заголовок</h1>`);
// })
// const btn2 = document.createElement("button");
// btn2.textContent = "remove";
// body.insertAdjacentElement("beforeend", btn2);
// btn2.addEventListener("click",() => {
//     document.querySelector("h1").remove()
// })

// const btn3 = document.createElement("button");
// btn3.textContent = "Наведение";
// body.insertAdjacentElement("beforeend", btn3);
// btn3.addEventListener("mouseover",() => { // Наведение (как hover в html)
//     console.log(`Навели на кнопку`);
// })
// btn3.addEventListener("mouseout",() => {
//     console.log(`Наведения на кнопку больше нет`);
// })

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

// const list = document.querySelector('ul');  // поиск списка
// const btn = document.createElement("button");  // создали кнопку
// btn.textContent = "Добавить";
// body.insertAdjacentElement("afterbegin", btn);  // body в 43й строке создали
// btn.addEventListener("click", () => {
//     list.insertAdjacentHTML("beforeend", `<li>новый элемент списка</li>`);
// })
// const btnDel = document.createElement("button");
// btnDel.textContent = "Удалить";
// body.insertAdjacentElement("afterbegin", btnDel);
// btnDel.addEventListener("click", () => {
//     list.firstElementChild.remove();  // удаление 1го ребенка в списке
// })
// const addClass = document.createElement("button");
// addClass.textContent = "Добавить класс";
// body.insertAdjacentElement("afterbegin", addClass);
// addClass.addEventListener("click", () => {
//     addClass.classList.add("click");
// })
