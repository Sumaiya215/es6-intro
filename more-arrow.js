const difference = (x,y) => x-y;
const multiply = (first,second,third) => first * second *third;

// console.log(difference(8,3));
const result = multiply(2,4,7);
// console.log(result);

const getAge = (person) => person.age;
const student = {name:'ananta', age:45}
const age = getAge(student);
// console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5,9,33,7,20]);
// console.log(third);

const doubleIt = num => num*2;
const output = doubleIt(9);
console.log(output);

// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function
const doMath = (x,y,z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}

const calculatedValue = doMath(2,3,5);
console.log(calculatedValue);