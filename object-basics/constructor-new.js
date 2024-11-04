"use strict"

function Calculator() {
    this.read = function() {
        this.num1 = prompt("Введите первое число:", "0");
        this.num2 = prompt("Введите второе число:", "0");
    }
    this.sum = function() {
        return +this.num1 + +this.num2;
    }
    this.mul = function() {
        return +this.num1 * +this.num2;
    }
};

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Сколько прибавить?", "0");
    }
};
let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
alert(accumulator.value); // выведет сумму этих значений