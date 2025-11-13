// dynamically type change
// -> tuple
type GenericNumber<X, Y> = [X, Y];
const age: GenericNumber<string, string> = ["3", " 1"];
const random_number: GenericNumber<number, number> = [1, 3];

type GenericArray<T> = Array<T>;

const numberArray: GenericArray<number> = [2, 3, 4, 5];
const stringArray: GenericArray<string> = ["a", "b", "c"];
const booleanArray: GenericArray<boolean> = [true, false];

interface StudentInfo {
  name: string;
  age: number;
  sky: boolean;

  Salary?: number;
}
const Student: GenericArray<StudentInfo> = [
  {
    name: "kalid",
    age: 12,
    sky: true,
  },
];
// function random_value<T>(array: T[]) {
//   return array;
// }

// const arr1 = [1, 3, 4, 5];
// const getNumber = random_value(arr1);

// const arr2 = ["a", "as", "asf"];
// const getString = random_value(arr2);

// const ar3 = [true, false, true, false];
// const getBoolean = random_value(ar3);
