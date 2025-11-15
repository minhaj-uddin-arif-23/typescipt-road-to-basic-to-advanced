// type gurd or type narrowing
// syntax -> in, typeof >> basically work on typeCheck
// '4' + 4 -> 44 wrong. 4+4 = 8 right 4 + '4' = 44
type typeCheck = number | string;
const add = (num1: typeCheck, num2: typeCheck) => {
  // if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
  // else return num1.toString() + num2.toString();
  return typeof num1 === "number" && typeof num2 === "number"
    ? num1 + num2
    : num1.toString() + num2.toString();
};
// console.log(add(2, "2"));

// console.log(add(2, 2));

type NormalUser = {
  name: string;
  allAccess: false;
};
type AdminUser = {
  name: string;
  role: "admin";
};

const checkRole = (value: NormalUser | AdminUser) => {
  if ("role" in value) {
    console.log(`Name is: ${value.name} and role is ${value.role}`);
  } else {
    console.log(`Normal User access`);
  }
};
checkRole({ name: "Hanif", role: "admin" });
