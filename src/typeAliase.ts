// we predifined type , and then reuse this if same content , benefit [clean code write help us]
type Product = {
  id: string;
  sellingDate: {
    realeaseDate: Date;
    expiredDate: Date;
  };
  details: string;
  color: string;
  exportedCountry: string;
};
const product1: Product = {
  id: "1001",
  sellingDate: {
    realeaseDate: new Date("15-06-2023"),
    expiredDate: new Date("24-12-2024"),
  },
  details: "Very metalic product",
  color: "purple",
  exportedCountry: "thailand",
};
const product2: Product = {
  id: "1002",
  sellingDate: {
    realeaseDate: new Date("15-06-2023"),
    expiredDate: new Date("24-12-2024"),
  },
  details: "Very iron product",
  color: "light",
  exportedCountry: "dubai",
};
const product3: Product = {
  id: "1003",
  sellingDate: {
    realeaseDate: new Date("15-06-2023"),
    expiredDate: new Date("24-12-2024"),
  },
  details: "Very iron product",
  color: "red",
  exportedCountry: "UK",
};
//name aliasing

type UserName = string;
type IsAdmin = boolean;
const firstName: UserName = "jihad";
const isAdmin: IsAdmin = true;

//  function type aliase
type AddNumber = (num1: number, num2: number, num3: number) => number;
const addThreeNumber: AddNumber = (num1, num2, num3) => {
  return num1 + num2 + num3;
};
console.log(addThreeNumber(4, 2, 12));
