"use strict";

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
};
checkAge(18);
checkAge(21);

function min(a, b) {
    return a < b ? a : b;
};
alert(min(2, 3));
alert(min(4, 1));

function pow(x,n) {
    if (n < 1 || n % 1 == 0) return;
    return x ** n;
};
alert(pow(2, 3));
alert(pow(4, 1));