const xhttp = new XMLHttpRequest();

xhttp.addEventListener("readystatechange", () => {
  if (xhttp.status === 200 && xhttp.readyState === 4) {
    const { products } = JSON.parse(xhttp.response);

    for (let i = 0; i < products.length; i++) {
      console.log(products[i]);
      const productsItem = document.createElement("div");
      productsItem.className = "products__item";
      productsItem.innerHTML = `
      <a href="#">
        <img
        src=${products[i].images[0]}
        alt="iphone"/>
      </a>

      <div class="products__item-title">
        <a href="#">
            <h2>${products[i].title}</h2>
        </a>
        <h3>$${products[i].price}</h3>
      </div>`;

      document.querySelector(".container").appendChild(productsItem);
    }
  }
});

xhttp.open("GET", "https://dummyjson.com/products", true);
xhttp.send();
