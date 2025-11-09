// object destructuring
const user = {
  id: 101,
  name: {
    firstName: "Minhaj",
    middleName: "uddin",
    lastName: {
      lastAgainName: "Arifullah",
    },
  },
  age: 23,
};

const {
  name: {
    lastName: { lastAgainName },
  },
} = user;
console.log(lastAgainName);
