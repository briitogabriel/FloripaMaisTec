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

  getTotalShopping() {
    return this.#itemsRegistered.reduce((totalShop, item) => totalShop + (item.product.price * item.qtd), 0)
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
    this.#itemsRegistered = [];
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

    register.addProduct(newCcode, newtPrice, newName)
    option = confirm(`Do you want to add a new product?`)
  } while (option !== false);

  alert('Check the console (F12) to see the list of products registered.')
  console.log(register.products)
}

const startShopping = () => {

  // amount = Number(prompt(`Your total shopping for ${productList.length} products is R$${totalShop}. Would you like a change for how much?`));


  // do {
  //   if (isNaN(amount)) {
  //     alert('Please provide a valid amount!');
  //     amount = Number(prompt(`Your total shopping is R$${totalShop}. Would you like a change for how much?`));
  //   } else if (amount < totalShop) {
  //     alert(`R$${parseFloat(amount).toFixed(2)} Is not enought! You must pay at least your total shopping amount (R$${parseFloat(totalShop).toFixed(2)})`);
  //     amount = Number(prompt(`Your total shopping is R$${totalShop}. Would you like a change for how much?`));
  //   }
  // } while (amount < totalShop || isNaN(amount));

  // change = parseFloat(amount - totalShop).toFixed(2);

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
    }
    option = confirm(`Does ${register.client} wants to add new products?`)
  } while (option !== false);

  alert('Added to Cart.')

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

  let totalShop = register.getTotalShopping()
  let amountPaid = prompt(`The shopping total cost is R$${parseFloat(totalShop).toFixed(2)}\nHow much ${register.client} would like the change for?`)
  register.closeShopping(amountPaid)
  let totalChange = register.change
  let itemsList = register.itemsRegistered

  shopTable.innerHTML = `
    <li>
      <b>Tech Bakery - ${register.client}'s Shopping Report:</b>
    </li>
    
    ${itemsList.map((item) => (
      `<li>
        Product: ${item.product.name} -> R$${parseFloat(item.product.price).toFixed(2)} x ${item.qtd} = R$${parseFloat(item.product.price * item.qtd).toFixed(2)}
      </li>`
    ))}

    
    <li>
      <b>Total shopping: R$${parseFloat(totalShop).toFixed(2)}</b>
    </li>

    <li>
      Amount paid: R$${parseFloat(amountPaid).toFixed(2)}
    </li>

    <li>
      Change: R$${parseFloat(totalChange).toFixed(2)}
    </li>`;

  register.resetShop();
}