"use strict"

const randomInteger = (min, max) => {
    const result = min + Math.random() * (max + 1 - min);
    return Math.floor(result);
};

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5