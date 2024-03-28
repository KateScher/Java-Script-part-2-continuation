// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”.
// Добавить кнопку отправить.
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox.
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”.

// const input = document.querySelector('input');
// const form = document.querySelector('form');
// const btn = document.querySelector('button');
// let error = false; // позволяет контролировать переключатель
// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (!input.checked && !error) {  // если атрибут check не нажат (не стоит галочка) и не false, то
//         const p = document.createElement("p");
//         p.textContent = "Необходимо согласиться с условиями";
//         btn.insertAdjacentElement("afterend", p); // после закрывающегося тега button
//         error = true; // если переменная стала true, то условие двойное не выполняется и параграф p повторно не отрисовывается;
//     } else if(input.checked) {  // если галочка стоит, то форму отправляем
//         form.submit();
//     }
// })

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно.
// Кнопка отправить.
// Если выбран чай, необходимо вывести сообщение “Чай закончился”.
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”.

// const radio = document.querySelectorAll('input');
// const btn = document.querySelector('button');
// const p = document.querySelector('p');
// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     radio.forEach((item) => {
//         if (item.checked && item.id === "tea") {
//             p.textContent = "Чай закончился";
//         } else if (item.checked && item.id === "coffee") {
//             p.textContent = "Кофе закончился";
//         }
//     })
// })

// Создать поле ввода (пароль).
// Кнопка отправить.
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом.
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”.

// const password = document.querySelector("input");
// const btn = document.querySelector("button");
// btn.addEventListener("click", (e) => { // (e) - обычно необходимо при отправке формы
//   e.preventDefault();
//   if (password.value === "пароль") {
//     password.style.border = "3px solid green";
//     btn.submit();
//   } else {
//     password.style.border = "3px solid red";
//     password.value = ""; // будет стираться, можно использовать trim() - но лучше при регистрации
//     password.placeholder = "Пароль не верный";
//   }
// });

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const input = document.querySelector("input");
const h1 = document.querySelector("h1");
input.addEventListener("input", () => {
  // отправки формы нет, и (е) не нужна
  h1.textContent = input.value;
}); // данный алгоритм может использоваться для валидации форм ввода - пока не введешь нужное значение, например, рамка будет светиться красным цветом
