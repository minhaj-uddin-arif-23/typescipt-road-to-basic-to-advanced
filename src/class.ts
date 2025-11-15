// oop : class >> object >> instance
// Note : if parent class property and method same just add extends but add your own property need to first super('add this parent class property method')
class ParentClass {
  // defined
  name: string;
  address: string;
  dateOfBirth: number;
  constructor(name: string, address: string, dateOfBirth: number) {
    // initialize
    this.name = name;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
  }

  printInfo() {
    //method
    console.log(`your name is ${this.name} and address is ${this.address} `);
  }
  favouritFood() {
    console.log(`This is my favourite Parent Class`);
  }
}

class Person1 extends ParentClass {
  salary: number; // own property
  isMarried: boolean; // own property
  constructor(
    name: string,
    addrees: string,
    dateOfBirth: number,
    salary: number,
    isMarried: boolean
  ) {
    super(name, addrees, dateOfBirth); // parent class teke asce
    this.salary = salary;
    this.isMarried = isMarried;
  }

  football(timeTaken: number) {
    console.log(`Football is my favourite game, and i play like ${timeTaken}`);
  }
}
const shakil = new Person1("aa", "ab", 90, 25000, true);
// shakil.favouritFood();
// shakil.football(5);
console.log(shakil);

// parameter properties
// blueprint
class StudentInfo1 {
  // defined
  email: string;
  permanentAddress: string;
  contactNo: string;
  constructor(email: string, permanentAddress: string, contactNo: string) {
    this.email = email;
    this.permanentAddress = permanentAddress;
    this.contactNo = contactNo;
  }

  gym() {
    console.log(` ${this.email} your gym is activate `);
  }
}
// blueprint
const id101 = new StudentInfo1("ajij@gmail.com", "sk 2 road", "019090002");
// console.log(id101.gym());
