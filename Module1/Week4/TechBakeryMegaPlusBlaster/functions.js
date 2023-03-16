let productsLoad = JSON.parse(localStorage.getItem('ProductsStock'))

const shopTable = document.getElementById('shopTable')

class CashRegister {
  #client;
  #products;
  #kartItems;
  #amount;
  #change;

  constructor() {
    this.#client = null;
    this.#products = productsLoad ? productsLoad : [];
    this.#kartItems = [];
    this.#amount = 0;
    this.#change = 0;
  }

  welcome(client) {
    this.#client = client;
  }
  get client() {
    return this.#client;
  }

  addItem(product, qtd) {
    this.#kartItems.push({
      product,  //number
      qtd       //number
    });
  }
  get kartItems() {
    return this.#kartItems;
  }

  addProduct(ccode, price, name, stockQtd) {
    this.#products.push({
      ccode,      //number
      price,      //number
      name,       //string
      stockQtd    //number
    });
  }
  get products() {
    return this.#products;
  }

  findProduct(ccode) {
    return this.#products.find((product) => product.ccode === ccode);
  }

  getTotalShopping() {
    return this.#kartItems.reduce((totalShop, item) => totalShop + (item.product.price * item.qtd), 0)
  }

  closeShopping(amount) {
    this.#amount = amount;    //number
    const totalShop = this.getTotalShopping();
    this.#change = this.#amount - totalShop;
  }
  get amount() {
    return this.#amount;
  }
  get change() {
    return this.#change;
  }

  resetShop() {
    this.#client = null;
    this.#products = [];
    this.#kartItems = [];
    this.#amount = 0;
    this.#change = 0;
  }
}

const register = new CashRegister();

const registerProducts = () => {
  let option = true;
  do {
    let newName = prompt(`Enter the Product name:`);
    let newtPrice = Number(prompt(`Enter the price:`));
    let newCcode = Number(prompt(`Enter the codebar:`));
    let newStockQtd = Number(prompt(`Enter the stock quantity:`));

    register.addProduct(newCcode, newtPrice, newName, newStockQtd)
    option = confirm(`Do you want to add a new product?`)
  } while (option !== false);

  alert('Register finnished!\nCheck localStorage (F12) to see the list of products available in stock.')
  localStorage.setItem('ProductsStock', JSON.stringify(register.products))    //saving stock on localStorage
}

const startShopping = () => {

  register.welcome(prompt("What is the customer's name?"));
  
  let option = true;
  do {
    const productFound = register.findProduct(
      Number(prompt(`Enter the codebar of the product that ${register.client} wants to buy:`))
    );
    
    if (productFound == undefined) {
      alert('Product not found!')
    } else {
      
      const qtToBuy = Number(prompt(`How many '${productFound.name}s' ${register.client} wants to buy?`))
      register.addItem(productFound, qtToBuy)

      let productIndex = register.products.indexOf(productFound)
      register.products[productIndex].stockQtd = register.products[productIndex].stockQtd - qtToBuy;
    }
    option = confirm(`Added to Cart!\nDoes ${register.client} wants to add new products?`)
  } while (option !== false);

  localStorage.setItem('ProductsStock', JSON.stringify(register.products))    //saving stock on localStorage
}

const handleClose = () => {

  let totalShop = register.getTotalShopping()
  let amountPaid = prompt(`The shopping total cost is R$${parseFloat(totalShop).toFixed(2)}\nHow much ${register.client} would like the change for?`)
  register.closeShopping(amountPaid)
  let totalChange = register.change
  let itemsList = register.kartItems

  shopTable.innerHTML = `
    <li>
      <b>Tech Bakery - ${register.client}'s Shopping Report:</b>
    </li>
    
    ${itemsList.map((item) => (
      `<li>
        Product: ${item.product.name} -> R$${parseFloat(item.product.price).toFixed(2)} x ${item.qtd} = R$${parseFloat(item.product.price * item.qtd).toFixed(2)}
      </li>`
    )).join('')}

    
    <li>
      <b>Total Cost: R$${parseFloat(totalShop).toFixed(2)}</b>
    </li>

    <li>
      Amount paid: R$${parseFloat(amountPaid).toFixed(2)}
    </li>

    <li>
      Change: R$${parseFloat(totalChange).toFixed(2)}
    </li>`;

  register.resetShop();
}