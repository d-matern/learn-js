"use strict"

function hello(name) {
    let phrase = `Hello, ${name}!`;

    debugger;  // <-- тут отладчик остановится

    say(phrase);
}

function say(phrase) {
    alert(`** ${phrase} **`);
}