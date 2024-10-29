"use strict";

const age = 29;

if (!(age >= 14 && age <= 90)) {
    alert("Вне диапазона (с оператором НЕ !)");
}
if (age < 14 || age > 90) {
    alert("Вне диапазона (обычный способ)");
}

const login = prompt("Кто там?");

if (!login) {
    alert("Отменено");
} else if (login !== 'Админ') {
    alert('Я вас не знаю');
} else {
    const password = prompt("Пароль?");

    if (!password) {
        alert("Отменено");
    } else if (password === "Я главный") {
        alert("Здравствуйте!");
    } else {
        alert("Неверный пароль");
    }
}
