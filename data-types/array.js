"use strict"

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');

alert(styles);

const setItemToMiddleArray = (arr, newItem) => {
    const posMiddle = Math.ceil((arr.length - 1) / 2);

    if (posMiddle) {
        arr[posMiddle] = newItem;
    }

    return arr;
};

setItemToMiddleArray(styles, 'Классика');
alert(styles.shift());
styles.unshift('Рэп', 'Регги');



const sumInput = () => {
    const numbers = [];
    
    while (true) {
        const num = prompt('Введите число', '0');

        if (num === "" || num === null || !isFinite(num)) break;

        numbers.push(+num);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
};

alert(sumInput());

const getMaxSubSum = (arr) => {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);

        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;
};

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0