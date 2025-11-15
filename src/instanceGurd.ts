class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  studyhour: number;
  constructor(name: string, studyhour: number) {
    super(name);
    this.studyhour = studyhour;
  }
  favouriteGame() {
    console.log(`Cricket is my favourite Game`);
  }
}
class Teacher extends Person {
  joiningDate: number;
  constructor(name: string, joiningDate: number) {
    super(name);
    this.joiningDate = joiningDate;
  }
  subjectClass() {
    console.log(`subject`);
  }
}
// function gurd

const isStudent = (user: Person) => {
  return user instanceof Student; // user is student
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const User = (user: Person) => {
  if (isTeacher(user)) {
    console.log(user.name);
    user.subjectClass();
  } else if (isStudent(user)) {
    user.favouriteGame();
  } else {
    console.log(user.name);
  }
};
const student1 = new Student("Ali akbar", 18);
// User(student1);
const teacher1 = new Teacher("Mizan sir", 30);
// User(teacher1);
const normalUser = new Person("I am normal");
User(normalUser);
