// Access Modifier public private protected
// getter and setter -> get ,set using normal property accessible it can reduce function calling
class BankAccount {
  readonly id: number;
  readonly name: string;
  private balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  addBalance(balances: number) {
    this.balance = balances;
  }
  // getBalance() {
  //   console.log(`my balance is ${this.balance}`);
  // }
  set add_Balance(amount: number) {
    this.balance = this.balance + amount;
  }
  get get_balance() {
    return this.balance;
  }
}

const account1 = new BankAccount(121, "arif", 0);
// account1.addBalance(120);
account1.add_Balance = 12;
account1.add_Balance = 200;
account1.add_Balance = 500;
console.log(account1.get_balance);
// account1.getBalance()
