// make a array with different data types using generic function with value
const createArrayWihGeneric = <T>(value: T) => {
  return [value];
};

const stringArray = createArrayWihGeneric("arif");
const numberArray = createArrayWihGeneric(2);
const objectArray = createArrayWihGeneric({
  id: 1,
  name: "hello",
});
// console.log(stringArray, numberArray, objectArray);

//tuple
const createArrayWithTuple = (value1: number, value2: object) => {
  return [];
};
// generic tuple
const createArrayWithTupleGeneric = <X, Y>(value1: X, value2: Y) => [
  value1,
  value2,
];
const arr1 = createArrayWithTupleGeneric("minhaj", 23);
const arr2 = createArrayWithTupleGeneric({ id: 1, name: "sakib" }, true);
// console.log(arr1, arr2);
// dynamically value property method change
// constant:strict type values
type Student = { id: number; name: string };
const addToStudent = <T extends Student>(studentInfo: T) => {
  return {
    course: "CompileX Bootcamp",
    ...studentInfo,
  };
};

const student1 = {
  id: 101,
  name: "niloy",
  laptop: true,
};
const student2 = {
  id: 102,
  name: "sakil",
  laptop: true,
  isMarried: true,
};
const student3 = {
  id: 102,
  name: "sakil",
  pc: true,
  isMarried: true,
  children: 2,
};
const student4 = {
  id: 12,
  name: "ashaf",
  address: "string",
};
// console.log(addToStudent(student1));
// console.log(addToStudent(student2));
// console.log(addToStudent(student3));
console.log(addToStudent(student4));
