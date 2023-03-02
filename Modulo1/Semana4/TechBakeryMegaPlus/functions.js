const shopTable = document.getElementById('shopTable')

class CashRegister {
  #client;
  #products;
  #itemsRegistered;
  #amount;
  #change;

  constructor() {
    this.#client = null;
    this.#products = [];
    this.#itemsRegistered = [];
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
    this.#itemsRegistered.push({
      product,  //number
      qtd       //number
    });
  }
  get itemsRegistered() {
    return this.#itemsRegistered;
  }

  addProduct(ccode, price, name) {
    this.#products.push({
      ccode,      //number
      price,      //number
      name        //string
    });
  }
  get products() {
    return this.#products;
  }

  findProduct(ccode) {
    return this.#products.find((product) => product.ccode === ccode);
  }

  totalShopping() {
    return this.#itemsRegistered.reduce((totalShop, item) => totalShop + (item.product.price * item.qtd), 0)
  }

  closeShopping(amount) {
    this.#amount = amount;    //number
    const totalShop = this.totalShopping();
    this.#change = this.#amount - totalShop;
    return this.#change;
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
    this.#itemsRegistered = [];
    this.#amount = 0;
    this.#change = 0;
  }
}

const register = new CashRegister();

const startShopping = () => {

  register.welcome(prompt("What is the customer's name?"));

  register.addProduct(001, 10, 'Produto 1')
  register.addProduct(002, 20, 'Produto 2')

  const productFound = register.findProduct(002);
  
  if (productFound == undefined) {
    console.log('Product not found')
  } else {
    register.addItem(productFound, 3)
    register.addItem(productFound, 7)
  }

  // productList.forEach((item, index) => {
  //   let li = document.createElement('li');
  //   li.innerHTML = `Product ${index+1}: R$${parseFloat(item).toFixed(2)}`;
  //   shopTable.appendChild(li);
  // });
  
  // let totalItem = document.createElement('li');
  // totalItem.innerHTML = `<b>Total shopping: R$${parseFloat(totalShop).toFixed(2)}</b>`;
  // shopTable.appendChild(totalItem);
  
  // let amountItem = document.createElement('li');
  // amountItem.innerHTML = `Amount paid: R$${parseFloat(amount).toFixed(2)}`;
  // shopTable.appendChild(amountItem);

  // let changeItem = document.createElement('li');
  // changeItem.innerHTML = `Change: R$${parseFloat(change).toFixed(2)}`;
  // shopTable.appendChild(changeItem);
}

const handleClose = () => {

  console.log(register)
  console.log('Total Shop: ' + register.totalShopping())
  console.log('Change: ' + register.closeShopping(500))

  shopTable.innerHTML = `
    <li>
      <b>Tech Bakery - Shopping Report:</b>
    </li>
    `;

  register.resetShop();
  console.log(register)
}