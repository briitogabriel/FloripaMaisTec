const shopTable = document.getElementById('shopTable')

const shop = () => {

  const productList = [];
  let i = 1;
  let productPrice = 0;
  let totalShop = 0;
  let amount = 0;
  let change = 0;

  do {
    productPrice = Number(prompt(`Enter the Product price number ${i} or type 0 to finish shopping:`));

    if (isNaN(productPrice)) {
      alert('Please provide a valid price!')
    } else if (productPrice != 0) {
      productList.push(productPrice);
      totalShop = totalShop + productPrice;
      i++;
      
    }

  } while (productPrice !== 0);


  amount = Number(prompt(`Your total shopping for ${productList.length} products is R$${totalShop}. Would you like a change for how much?`));


  do {
    if (isNaN(amount)) {
      alert('Please provide a valid amount!');
      amount = Number(prompt(`Your total shopping is R$${totalShop}. Would you like a change for how much?`));
    } else if (amount < totalShop) {
      alert(`R$${parseFloat(amount).toFixed(2)} Is not enought! You must pay at least your total shopping amount (R$${parseFloat(totalShop).toFixed(2)})`);
      amount = Number(prompt(`Your total shopping is R$${totalShop}. Would you like a change for how much?`));
    }
  } while (amount < totalShop || isNaN(amount));

  change = parseFloat(amount - totalShop).toFixed(2);


  let header = document.createElement('li');
  header.innerHTML = '<b>Tech Bakery - Shopping Report:</b>';
  shopTable.appendChild(header);

  productList.forEach((item, index) => {
    let li = document.createElement('li');
    li.innerHTML = `Product ${index+1}: R$${parseFloat(item).toFixed(2)}`;
    shopTable.appendChild(li);
  });
  
  let totalItem = document.createElement('li');
  totalItem.innerHTML = `<b>Total shopping: R$${parseFloat(totalShop).toFixed(2)}</b>`;
  shopTable.appendChild(totalItem);
  
  let amountItem = document.createElement('li');
  amountItem.innerHTML = `Amount paid: R$${parseFloat(amount).toFixed(2)}`;
  shopTable.appendChild(amountItem);

  let changeItem = document.createElement('li');
  changeItem.innerHTML = `Change: R$${parseFloat(change).toFixed(2)}`;
  shopTable.appendChild(changeItem);
}


const resetShop = () => {
  productList = [];
  i = 1;
  productPrice = 0;
  totalShop = 0;
  amount = 0;
  change = 0;
  shopTable.innerText = '';
}