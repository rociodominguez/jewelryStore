const jewelryProducts = [
  {
    name: "Pendientes Oh My Gold",
    price: 50,
    seller: "Trendy Jewelry",
    category: "pendientes",
    image: "./assets/image/doradolargo.jpg",
  },
  {
    name: "Anillos First Collection",
    price: 65,
    seller: "So Much Gold",
    category: "anillos",
    image: "./assets/image/conjuntouno.jpg",
  },
  {
    name: "Pendientes Sunset",
    price: 25,
    seller: "Golden Dream Jewelry",
    category: "pendientes",
    image: "./assets/image/areteflecos.jpg",
  },
  {
    name: "Pulseras In Gold We Trust",
    price: 65,
    seller: "Quality Jewelry",
    category: "pulseras",
    image: "./assets/image/conjuntopulsera.jpg",
  },
  {
    name: "Collar Sweetie",
    price: 50,
    seller: "So Much Gold",
    category: "collares",
    image: "./assets/image/cadenamodelo.jpg",
  },
  {
    name: "Anillo Green Circle",
    price: 75,
    seller: "Quality Jewelry",
    category: "anillos",
    image: "./assets/image/anillodorado.jpg",
  },
  {
    name: "Pendintes Look At Me",
    price: 50,
    seller: "Trendy Jewelry",
    category: "pendientes",
    image: "./assets/image/aretenaranja.jpg",
  },
  {
    name: "Pulseras Spark",
    price: 25,
    seller: "So Much Gold",
    category: "pulseras",
    image: "./assets/image/pulseratriple.jpg",
  },
  {
    name: "Collar Double Love",
    price: 35,
    seller: "Trendy Jewelry",
    category: "collares",
    image: "./assets/image/cadenasola.jpg",
  },
  {
    name: "Anillos From Me to Me",
    price: 35,
    seller: "Golden Dream Jewelry",
    category: "anillos",
    image: "./assets/image/conjuntodos.jpg",
  },
];

const headerContainer = () => {
  const template = `
<div class="top-items">
<input class="input" id="topsearch" type= text placeholder="Buscar">
<a href="#"><img class="top-items" src="./assets/svg/user-circle.svg" alt="user btn"></a>
<a href="#"><img class="top-items" src="./assets/svg/shopping-bag.svg" alt="shopping btn"></a>
</div>
<h1>Fall In Gold</h1>
<nav>
    <ul>
        <li>
            <a class="element" href="#">INICIO</a>
        </li>
        <li>
            <a class="element" href="#">COLECCIONES</a>
        </li>
        <li>
            <a class="element" href="#">BLOG</a>
        </li>
        <li>
            <a class="element" href="#">SOBRE NOSOTROS</a>
        </li>
    </ul>
</nav>`;

  const headerContainer = document.querySelector("header");
  headerContainer.innerHTML = template;
};

headerContainer();

const searchesTemplate = () => {
  const template = `
    <div id="seller">
      <select class="input" id="seller-select">
        <option value="Allsellers">Vendedores</option>
        <option value="So Much Gold">So Much Gold</option>
        <option value="Trendy Jewelry">Trendy Jewelry</option>
        <option value="Golden Dream Jewelry">Golden Dream Jewelry</option>
        <option value="Quality Jewelry">Quality Jewelry</option>
      </select>
    </div>
    <div id="filter-btns">
      <input class="price-style" id="price" type="number" min="0" placeholder="Precio">
      <button id="btn-search" class="btn-search">Buscar</button>
      <button id="btn-reset" class="btn-clean">Limpiar Filtros</button>
    </div>
  `;

  const searchesTemplate = document.querySelector(".searches");
  searchesTemplate.innerHTML = template;
};

searchesTemplate();

const productsContainer = document.querySelector(".productscontainer");

const loadProducts = (products) => {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const template = `
    <article>
      <div><img class="photos" src="${product.image}" alt="${product.image}"></div>
       <div class="details">
          <h3 class="title">${product.name}</h3>
          <p class="price">${product.price}€</p>
          <p class="seller">${product.seller}</p>
          <button id="btn-product"><span class="text">Comprar</span><span>¡Gracias!</span></button>
       </div>
    </article>
      `;

    productsContainer.innerHTML += template;
  });
};

loadProducts(jewelryProducts);

const footerContainer = () => {
  const template = `
  <div class="footer-items-1">
  <a href="#">Copyright</a>
  <a href="#">Términos de uso</a>
  <a href="#">Política de privacidad</a>
  <a href="#">Política de cookies</a>
</div>
<div class="footer-items-2">
  <a href="#">Contacto</a>
  <a href="#">Preguntas frecuentes</a>
  <a href="#">Envíos y devoluciones</a>
  <a href="#">Localiza tu pedido</a>
</div>
<div class="footer-items-3">
  <a href="#">Métodos de pago</a>
  <a href="#">Nuestro compromiso</a>
  <a href="#">Trabaja con nosotros</a>
  <a href="#">Tu franquicia</a>
</div>
<div class= "rrss">
<a href="https://www.linkedin.com/in/rociodomjim/"><img class= "rrss" src="./assets/svg/facebook.svg" alt="user btn"></a>
<a href="https://www.linkedin.com/in/rociodomjim/"><img class= "rrss" src="./assets/svg/instagram-circle.svg" alt="user btn"></a>
<a href ="https://www.linkedin.com/in/rociodomjim/"><img class= "rrss" src="./assets/svg/tiktok-circle.svg" alt="user btn"></a>
</div>`;

  const footerContainer = document.querySelector("footer");
  footerContainer.innerHTML = template;
};

footerContainer();

// FILTERED BY CATEGORY AND SELLER

const filterProducts = (categoryFilter, selectedSeller) => {
  const filteredProducts = jewelryProducts.filter((product) =>
    (selectedSeller === 'Allsellers' || product.seller === selectedSeller) &&
    product.category.toLowerCase().includes(categoryFilter)
  );

  const article$$ = document.querySelector('.productscontainer');
  article$$.innerHTML = '';

  if (filteredProducts.length === 0) {
    const alert = document.createElement('p');
    alert.textContent = '¡Lo sentimos! Producto no disponible';
    alert.classList.add('not-found');
    article$$.appendChild(alert);
  } else {
    loadProducts(filteredProducts);
  }
};

const inputChange = (event) => {
  const categoryFilter = event.target.value.toLowerCase();
  const selectedSeller = document.getElementById('seller-select').value;
  filterProducts(categoryFilter, selectedSeller);

  applyAllFilters();
};

const selectChange = (event) => {
  const categoryFilter = document.getElementById('topsearch').value.toLowerCase();
  const selectedSeller = event.target.value;
  filterProducts(categoryFilter, selectedSeller);

  applyAllFilters();
};

const topsearchinput$$ = document.getElementById('topsearch');
topsearchinput$$.addEventListener('input', inputChange);

const seller$$ = document.getElementById('seller-select');
seller$$.addEventListener('change', selectChange);

// FILTERED BY PRICE

const getElementByPrice = (jewelryProducts, maxPrice) => {
  const filterProducts = jewelryProducts.filter(
    (product) => Number(product.price) <= Number(maxPrice))
  
  loadProducts(filterProducts);
};

const filteredByPrice = document.querySelector('#btn-search');
filteredByPrice.addEventListener('click', () => {
  const priceFilter = document.querySelector('#price');
  const maxPrice = priceFilter.value;

  getElementByPrice(jewelryProducts, maxPrice);
});

// RESET FILTERS

const priceFilter$$ = document.querySelector('#price');
const resetButton$$ = document.querySelector('#btn-reset');

resetButton$$.addEventListener('click', () => {
  loadProducts(jewelryProducts);

  priceFilter$$.value = '';
});

// CONST TO APPLY ALL FILTERS AT THE SAME TIME

const applyAllFilters = () => {
  const categoryFilter = topsearchinput$$.value.toLowerCase();
  const selectedSeller = seller$$.value;
  const maxPrice = priceFilter$$.value;

  const filteredProducts = jewelryProducts.filter((product) =>
    (selectedSeller === 'Allsellers' || product.seller === selectedSeller) &&
    product.category.toLowerCase().includes(categoryFilter) &&
    (maxPrice === '' || Number(product.price) <= Number(maxPrice))
  );

  loadProducts(filteredProducts);
};