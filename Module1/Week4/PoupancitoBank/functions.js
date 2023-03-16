
// POUPANCITO BANK V1 -> Classe "Account"

class Account {
  balance;
  #password;

  constructor(balance, password) {
    this.balance = balance;
    this.#password = password;
  }

  deposite(cash, password) {
    if (this.#password == password) {
      this.balance = this.balance + Number(cash)
    } else {
      alert('Incorrect password.')
    }
    return this.balance
  }

  withdraw(cash, password) {
    if (this.#password == password) {
      this.balance = this.balance - Number(cash)
    } else {
      alert('Incorrect password.')
    }
    return this.balance
  }
}

const currentAccount = new Account(0, 'SECRET1');

const handleDeposit = () => {
  let cashDeposit = prompt('Hello! How much would you like to deposit?')
  let password = prompt('Please inform you password:')

  currentAccount.deposite(cashDeposit, password)
  setCurrentBalance();
}

const handleWithdraw = () => {
  let cashWithdraw = prompt('Hello! How much would you like to withdraw?')
  let password = prompt('Please inform you password:')
  
  currentAccount.withdraw(cashWithdraw, password)
  setCurrentBalance();
}

const currentBalance = document.getElementById('currentBalance')
const setCurrentBalance = () => {
  currentBalance.innerHTML = `R$${parseFloat(currentAccount.balance).toFixed(2)}`
}
currentBalance.onload = setCurrentBalance();


// POUPANCITO BANK V2 - Classe "Savings" (herança)


class Savings extends Account {
  #interest;

  constructor(balance, password) {
    super(balance, password);
  }

  updateInterest() {
    this.#interest = (1 + 0.7/100).toFixed(3);  //determinates interest rate = 0.7%
    this.balance = this.balance * this.#interest
    return this.balance
  }
}

// const savingsAccount = new Savings(0, 'SECRET2');

// const handleSavingsDeposit = () => {
//   let cashDeposit = prompt('Hello! How much would you like to deposit?')
//   let password = prompt('Please inform you password:')

//   savingsAccount.deposite(cashDeposit, password)
//   setSavingsBalance();
// }

// const handleSavingsWithdraw = () => {
//   let cashWithdraw = prompt('Hello! How much would you like to withdraw?')
//   let password = prompt('Please inform you password:')
  
//   savingsAccount.withdraw(cashWithdraw, password)
//   setSavingsBalance();
// }

// const savingsBalance = document.getElementById('currentSavingsBalance')
// const setSavingsBalance = () => {
//   savingsBalance.innerHTML = `R$${parseFloat(savingsAccount.balance).toFixed(2)}`
// }
// savingsBalance.onload = setSavingsBalance();

// const handleInterest = () => {
//   savingsAccount.updateInterest();
//   setSavingsBalance();
// }


// POUPANCITO BANK V3 - Classe "Savings com novo rendimento" (polimorfismo)


class SavingsV3 extends Savings {
  #interest;

  constructor(balance, password) {
    super(balance, password);
  }

  updateInterest() {
    this.#interest = (1 + 1.2/100).toFixed(3);  //determinates interest rate = 1.2%
    this.balance = this.balance * this.#interest
    return this.balance
  }
}

const savingsAccountV3 = new SavingsV3(0, 'SECRET3');

const handleSavingsDeposit = () => {
  let cashDeposit = prompt('Hello! How much would you like to deposit?')
  let password = prompt('Please inform you password:')

  savingsAccountV3.deposite(cashDeposit, password)
  setSavingsBalance();
}

const handleSavingsWithdraw = () => {
  let cashWithdraw = prompt('Hello! How much would you like to withdraw?')
  let password = prompt('Please inform you password:')
  
  savingsAccountV3.withdraw(cashWithdraw, password)
  setSavingsBalance();
}

const savingsBalance = document.getElementById('currentSavingsBalance')
const setSavingsBalance = () => {
  savingsBalance.innerHTML = `R$${parseFloat(savingsAccountV3.balance).toFixed(2)}`
}
savingsBalance.onload = setSavingsBalance();

const handleInterest = () => {
  savingsAccountV3.updateInterest();
  setSavingsBalance();
}