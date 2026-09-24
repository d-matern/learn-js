"use strict"

// 1. Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// function sumUserNumbers() {
//     const a = +prompt('a', 0);
//     const b = +prompt('b', 0);

//     return a + b;
// }
// alert(sumUserNumbers());

// 3. Ввод числового значения
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена».
// В этом случае функция должна вернуть null.

// function readNumber() {
//     let result = null;

//     do {
//         result = prompt('Введите число', '');
//         result = result?.trim();
//     } while (!isFinite(result))

//     if (result === '' || result === null) return null;

//     return +result;
// }
// alert(readNumber());

// 5. Случайное число от min до max
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

// function random(min, max) {
// }
// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );

// 6. Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// function randomInteger(min, max) {
// }

// alert( randomInteger(1, 5) );
// alert( randomInteger(1, 5) );
// alert( randomInteger(1, 5) );