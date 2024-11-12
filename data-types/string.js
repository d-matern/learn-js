"use strict"

const ucFirst = (str) => {
    if (!str) return str;

    const result = str[0].toUpperCase() + str.slice(1);
    return result;
};

alert(ucFirst("вася"));

const checkSpam = (str) => {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
};

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

const truncate = (str, maxLength) => {
    const strLength = str.length;

    if (strLength <= maxLength) return str;

    const result = str.slice(0, (maxLength - 1)) + '…';
    return result;
};

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));

const extractCurrencyValue = (str) => {
    return +str.slice(1);
};

alert(extractCurrencyValue('$120'));