// rest -> include in one place
// spreed -> work on multiple place mean value can spreed
let arr1 = ["c", "c++", "c#"];
let arr2 = ["Javascript", "java", "python"];
let arr3 = ["typescript"];

arr1.push(...arr3);
// console.log(arr1);
//TODO
//?  object wise make spreed operator
// rest

const addFriends = (...freinds: string[]) => {
  freinds.forEach((freind: string) => {
    console.log(`Freind-> `, freind);
  });
};

addFriends("jamal", "kamal", "tomal", "sohel");
