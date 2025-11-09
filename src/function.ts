/*
  Two types of funciton 
  1.Normal fucntion
  2.arrow function
*/

function addTowNumber(num1: number, num2: string): string {
  return num1 + num2;
}

// console.log(addTowNumber(2, "5"));
// object -> function method

const Money = {
  name: "Arif",
  balance: 500,
  addbalance(newBalance: number): number {
    return this.balance + newBalance;
  },
  language: "bengali",
};

// console.log(Money.addbalance(50000));
const arr: number[] = [2, 4, 6];

const result = arr.map((value: number): number => value * value);
console.log(result);
