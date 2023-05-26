const products = [
  {
    title: 'JBL',
    price: 99.90,
    priceUnity: 'R$',
    image: 'https://m.media-amazon.com/images/I/61yjoRgptdL._AC_SX679_.jpg'
  },
  {
    title: 'Sony',
    price: 149.90,
    priceUnity: 'R$',
    image: 'https://m.media-amazon.com/images/I/81is--jCNYL._AC_SY879_.jpg'
  },
  {
    title: 'Apple',
    price: 299.90,
    priceUnity: 'R$',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604709293000'
  },
  {
    title: 'Logitech',
    price: 69.90,
    priceUnity: 'R$',
    image: 'https://images.kabum.com.br/produtos/fotos/120488/headset-gamer-sem-fio-logitech-g733-rgb-lightsync-7-1-dolby-surround-com-blue-voice-branco-981-000882_1613129705_gg.jpg'
  }
];

function loadProducts() {
  const listRow = document.getElementById('product-list-row');

  products.forEach(product => {
    let colDiv = document.createElement('div');
    colDiv.className = 'col-sm-5 col-md-4 col-lg-3 mb-5';

    let productDiv = document.createElement('div');
    productDiv.className = 'product';

    let imageDiv = document.createElement('img');
    imageDiv.className = 'image-product';
    imageDiv.src = product.image;

    let titleSpan = document.createElement('span');
    titleSpan.className = 'title-product';
    titleSpan.textContent = product.title;

    let priceSpan = document.createElement('span');
    priceSpan.className = 'price-product';
    priceSpan.textContent = ` - ${product.priceUnity} ${product.price} `;

    let buyButton = document.createElement('button');
    buyButton.className = 'buy-button';
    buyButton.textContent = 'Add to cart';

    colDiv.appendChild(productDiv);
    productDiv.appendChild(imageDiv);
    productDiv.appendChild(titleSpan);
    productDiv.appendChild(priceSpan);
    productDiv.appendChild(buyButton);

    listRow.appendChild(colDiv);

    // <div class="col-3">
    //   <div class="product">
    //     <div class="image-product"></div>
    //     <span class="title-product">JBL</span>
    //     <span class="price-product">R$ 99.90</span>
    //     <button class="buy-button">Add to cart</button>
    //   </div>
    // </div>
  })

};

function changeTheme() {

  const body = document.body;
  const isDarkTheme = body.classList.contains('dark-theme');

  body.classList.toggle('dark-theme', !isDarkTheme)
}

loadProducts();