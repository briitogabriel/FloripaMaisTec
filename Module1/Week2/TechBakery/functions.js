
const pricingTable = document.getElementById('pricingTable')

const pricing = () => {

  const price = document.getElementById('price').value
  
  if (!isNaN(Number(price))) {
    pricingTable.innerHTML = `Bread current price: R$${parseFloat(price).toFixed(2)}`;
    let header = document.createElement('li');
    header.innerText = 'Tech Bakery - Pricing Table';
    pricingTable.appendChild(header);

    for (let i = 1; i <= 50; i++) {
      let li = document.createElement('li');
      result = i * Number(price);
      li.innerHTML = `${i} <img src="./img/bread.png" /> - R$${parseFloat(result).toFixed(2)}`;
      pricingTable.appendChild(li);
    }
  } else {
    pricingTable.innerHTML = `"${price}" is not a number`;
  }
}