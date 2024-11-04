"use strict"

const calculator = {
    read() {
        this.num1 = prompt("Введите первое число:", "0");
        this.num2 = prompt("Введите второе число:", "0");
    },
    sum() {
        return +this.num1 + +this.num2;
    },
    mul() {
        return +this.num1 * +this.num2;
    }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};
ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0