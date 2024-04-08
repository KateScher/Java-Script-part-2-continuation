const newData = JSON.parse(data);
console.log(newData);

const divContentElem = document.querySelector(".container");

newData.forEach((element) => {
  divContentElem.insertAdjacentHTML(
    "beforeend",
    `
    <div class="product__card">
      <div class="prod__image_cont">
        <img
          class="product__image"
          src="${element.img}"
          alt="${element.title}"
        />
        <button class="btn">
                <img src="Busket_for_fetur.svg" alt="cart" />
                Add to Cart
              </button>
      </div>
      <div class="card__text">
        <h3>${element.title}</h3>
        <p>
          ${element.description}.
        </p>
        <h4>${element.price}</h4>
      </div>
    </div>
`
  );
});
