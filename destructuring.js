const actor = {
    name: 'Ananta',
    age:30,
    phone: '01717653844',
    money:1245786397659
}

// If right side is an object left side of destructuring will be object as well
const {phone, age:boyos} = actor;

// console.log(phone);
// console.log(phone);
// console.log(phone);

console.log(boyos);
// console.log(age);
// console.log(age);

// array destructuring
const numbers = [45,99];
const [first,second] = numbers;
// console.log(numbers);

const [x,y] = [12,66];
// console.log([x,y]);

// advanced
function doubleThem(a,b){
    return [a*2, b*2];
}

const [prothom,ditiyo] = doubleThem(6,9);
console.log(prothom,ditiyo);