// Example 1
let a, b, other;

[a,b,...rest] = [15,25,30,45,78,'Hellow',[1,3,4],true];
console.log(rest);
console.log(typeof(rest))

// Example 2
let array = [(7*4)-(4*6),10];
let [a1,b1] = array;
console.log(array);


// Example 3
const obj = { aa: 1, bb: { c: 2 } };

const {
  aa,
  bb: { c: d },
} = obj;

console.log(obj);