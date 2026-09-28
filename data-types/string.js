"use strict"

// 1. Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
    if (typeof str !== 'string' && str.length <= 0) return str;

    const firstWordStr = str[0].toUpperCase();
    const result = firstWordStr + str.slice(1);
    return result;
}

alert(ucFirst("вася") == "Вася");

// 2. Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
    const validWords = ['viagra', 'XXX'];
    const lowerStr = str.toLowerCase();

    for (let word of validWords){
        if (lowerStr.includes(word.toLowerCase())) return true;
    }

    return false;
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

// 3. Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
    const isMoreLength = str.length > maxlength;
    let result = str;

    if (isMoreLength) {
        result = result.slice(0, (maxlength - 1)) + '…';
    }

    return result;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));

// 4. Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

const extractCurrencyValue = (str) => {
    return +str.slice(1);
};

alert(extractCurrencyValue('$120'));