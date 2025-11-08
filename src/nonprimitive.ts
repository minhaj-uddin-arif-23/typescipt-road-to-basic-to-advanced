// ....................... Array
// type Anyvalue =[...(string | number | boolean)[]];
// const random: Anyvalue = ["hello", "23", true, "gello"];
// const identity: Anyvalue = ["world", "23", true];
type Anyvalue = string | number | boolean;

const fruitName: string[] = ["mango", "apple", "banana"];

const random: Anyvalue[] = ["hello", "23", true, "gello"];
random.push("code");
random.push(12);
random.push(false);
random.push(true);
const identity: Array<Anyvalue> = ["world", "23", true];
//console.log(identity);

// array special method for typescript tuple

// fixed value print
const httpResponse: [string, number, boolean, string] = [
  "success",
  200,
  true,
  "Fetch the api",
];
httpResponse[0] = "successfully run";
httpResponse[1] = 201;
console.log(httpResponse);

// .................Object
//object creation -> explicitly type defined with value
/*
 ? two case found when explicitly type define in object
  1. object literal (value is count {type})
  2. access modifier readonly (no change anythinh)
  3. You can define Optional Type also if you not interested
*/
const Country: {
  readonly capital: string;
  name: "Bangladesh";
  desnitaion: string;
  freeDom?: number;
} = {
  capital: "Dhaka",
  name: "Bangladesh",
  desnitaion: "asia",
  freeDom: 1971,
};
// Country.name = "bangla"; // not possible
//Country.capital = 'chattogram'
console.log(Country);
