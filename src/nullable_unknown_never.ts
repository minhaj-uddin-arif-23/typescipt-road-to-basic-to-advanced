const sellProduct = (value: unknown) => {
  if (typeof value === "number") {
    console.log(`you give them ${value}`);
  } else if (typeof value === "string") {
    const [, number] = value.split(" ");
    console.log(number);
  } else {
    console.log("wrong input ");
  }
};
sellProduct(200);
sellProduct("price 200");
sellProduct(undefined);

// never type means it doesn't return anything

const error = (type: string): never => {
  throw new Error("Error found!");
};
console.log(error);
