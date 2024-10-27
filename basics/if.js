"use strict";

const jsName = prompt("Какое «официальное» название JavaScript?");

if (jsName === "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? “ECMAScript”!");
}

let result;
const a = 1;
const b = 2;

result = (a + b) < 4 ? "Мало" : "Много";
alert(result);