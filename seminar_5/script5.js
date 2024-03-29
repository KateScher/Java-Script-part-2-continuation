const newData = JSON.parse(data);
console.log(newData); // получение не строки, а полноценного массива с объектами
// данные в виде строки нужны для передачи на сервер

const divContentElem = document.querySelector(".content");

// пробежимся по массиву newData с пом. forEach и каждый элемент
// массива (т.е. объекты) будем вставлять внутрь div'a
newData.forEach((element) => {
  divContentElem.insertAdjacentHTML(
    "beforeend",
    `
<div class='wrapper'>
  <h2>${element.name}</h2>
  <h3>${element.username}</h3>
  <p>${element.email}</p>
  <p>${element.address.city}</p>
  <a href="tel:+${element.phone}">${element.phone}</a>
</div>
`
  );
});
