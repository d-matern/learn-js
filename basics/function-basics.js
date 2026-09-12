"use strict";

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// };
// checkAge(18);
// checkAge(21);

// function min(a, b) {
//     return a < b ? a : b;
// };
// alert(min(2, 3));
// alert(min(4, 1));

// function pow(x,n) {
//     if (n < 1) return;
//     return x ** n;
// };
// alert(pow(2, 3));
// alert(pow(4, 1));

// 1. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// function min(a, b) {
//     return a < b ? a : b;
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// 2. Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x, n) {
    if (n < 1) return alert('Степень должна быть > 1');
    
    return x**n;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

const x = prompt('Введите число возводимое в степень', 2);
const n = prompt('Введите степень', 2);

if (x > 0 && n > 1) {
    alert(`prompt ${pow(x, n)}`);
}
