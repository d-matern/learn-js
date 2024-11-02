"use strict"

const user = {};
user.name = "Jhon";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
const sum = (obj) => {
    let result = 0;

    for (let key in obj) {
        result += obj[key];
    }

    return result;
};
alert(sum(salaries));

const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
};
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
console.log(menu);