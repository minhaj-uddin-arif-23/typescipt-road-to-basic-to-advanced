//ternary, nullish coalescing & optional chaining
// ternary
const eligibleForMarried = (age: number) => {
  return age >= 0
    ? age >= 18
      ? "you are eligible!"
      : "you are not eligible"
    : '"invalid age"';
};
// console.log(eligibleForMarried(0));
// nullish coalescing only work null ,undefined note : if value doesn't exist it works nullish , otherwise work on default value

const user = "purple theme";
const isExist = user ?? "dark theme";
// console.log(isExist);
// optional chaning -> help us to crush or any other issue to project

const user1: {
  id: string;
  zipcode: undefined;
} = {
  id: "101",
  zipcode: undefined,
};

console.log(user1.zipcode);
