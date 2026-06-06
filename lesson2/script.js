
//Усложненное задание https://glo-academy.org/pl/teach/control/lesson/view?id=342702003
let num = 266219;
let result1 = num.toString().split('').reduce((res, el) => res * el);
console.log(result1);

let result2 = result1 ** 3;
console.log(result2.toString().substring(0, 2));