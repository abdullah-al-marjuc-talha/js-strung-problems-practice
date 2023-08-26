const result = Math.pow(3,8);
console.log(result);

const num1= 25;
const num2= 45;

// const gap = num1-num2;
const gap = Math.abs(num1-num2);
if(gap<5)
{
    console.log('you guys can be friends.')
}
else
console.log('you guys stay apart.');

// -------------------

const number1 = 2.4598;
const number2 = 2.5598;
// const fullNumber1 = Math.round(number1);
// const fullNumber2 = Math.round(number2);
// console.log(fullNumber1);
// console.log(fullNumber2);

// -------------------------------------------

const result2 = Math.ceil(2.0111);
const result3 = Math.floor(2.0111);
// console.log(result2);
// console.log(result3);

// -------------------------------------------

// random
// console.log(Math.random());
// const random = Math.round(Math.random()*100);

for(let i = 0; i < 20; i++)
{
    const random = Math.round(Math.random()*6);
    console.log(random);
}
// console.log(random);