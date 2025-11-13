//  extends

interface UserA {
  name: string;
  address: string;
}
interface UserC {
  email: string;
  contactNo: string;
}
interface UserB extends UserA, UserC {
  salary: number;
  passion: string;
}
const User: UserB = {
  name: "minhaj",
  address: "bakalia",
  salary: 100000,
  passion: "web developer",
  email: "aa@you.com",
  contactNo: "0154342332",
};

const { name, address, salary, passion } = User;
console.log(name, address, salary, passion);

// type and interface almost same
// use case interface -> object , type -> function

interface Book {
  name: string;
  author: string;
  publishe_day: string;
}

interface Book1 extends Book {
  theme: string;
  price: number;
  pages: number;
}
interface Book2 {
  rating: 4.9;
  inStock: true;
  language: "English";
}
const Book1Review: Book1 = {
  name: "arif",
  author: "arif",
  publishe_day: "322",
  theme: "sa",
  price: 21,
  pages: 12,
};
type Add = (num1: number, num2: number) => number;

const fun1: Add = (num1, num2) => {
  return num1 + num2;
};

fun1(2, 2);
// type array = number[];
type array = Array<number>;
const randomNumber: array = [2, 4, 7, 1];
