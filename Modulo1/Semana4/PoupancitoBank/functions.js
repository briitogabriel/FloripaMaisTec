
// POUPANCITO BANK V1

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


// POUPANCITO BANK V2


class Savings extends Account {
  constructor(balance, password, interest) {
    super(balance, password);
    this.interest = interest;
  }

  updateInterest() {
    this.balance = this.balance * this.interest
    return this.balance
  }
}

const savingsAccount = new Savings(0, 'SECRET2', (1 + 0.7/100).toFixed(3));  //determinates interest rate = 0.7%

const handleSavingsDeposit = () => {
  let cashDeposit = prompt('Hello! How much would you like to deposit?')
  let password = prompt('Please inform you password:')

  savingsAccount.deposite(cashDeposit, password)
  setSavingsBalance();
}

const handleSavingsWithdraw = () => {
  let cashWithdraw = prompt('Hello! How much would you like to withdraw?')
  let password = prompt('Please inform you password:')
  
  savingsAccount.withdraw(cashWithdraw, password)
  setSavingsBalance();
}

const savingsBalance = document.getElementById('currentSavingsBalance')
const setSavingsBalance = () => {
  savingsBalance.innerHTML = `R$${parseFloat(savingsAccount.balance).toFixed(2)}`
}
savingsBalance.onload = setSavingsBalance();

const handleInterest = () => {
  savingsAccount.updateInterest();
  setSavingsBalance();
}