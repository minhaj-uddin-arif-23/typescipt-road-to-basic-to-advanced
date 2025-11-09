// union also called or

type UserRole =
  | "admin"
  | "user"
  | "super_user"
  | "manager"
  | "assistant"
  | "guest";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return `Welcome ${role}`;
  } else if (role === "user") {
    return `Welcome ${role}`;
  } else if (role === "super_user") {
    return `Welcome ${role}`;
  } else if (role === "manager") {
    return `Welcome ${role}`;
  } else if (role === "assistant") {
    return `Welcome ${role}`;
  } else {
    return "you are a guest";
  }
};

console.log(getDashboard("manager"));

// intersection & [two types combined one entity means one identity exist]

type User = {
  name: string;
  age: number;
  address: string;
  email: string;
};
type Student = {
  id: string;
  collegeName: string;
  gpa: number;
};
type StudentUser = User & Student;

const User1: StudentUser = {
  id: "111101",
  name: "hasib",
  age: 25,
  address: "145 no road kb aman ali",
  email: "u@gmail.com",
  collegeName: "sk college",
  gpa: 4.44,
};
