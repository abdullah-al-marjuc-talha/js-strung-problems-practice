let first = 5;
let second = 7;
console.log(first,second);

// first approch
// const temp = first;
// first =second;
// second = temp;
// console.log(first,second);

// second approch ------ destructuring
[first,second] = [second,first];
console.log(first,second);
