//you


function firstChar(str) {
    const reversedStr = str.split('').reverse().join('');

    for (let i = 0; i < reversedStr.length; i++) {
        const char = reversedStr[i];
        if (reversedStr.indexOf(char) === reversedStr.lastIndexOf(char)) {
            return char;
        }
    }

    return null;
    }


// Do not change the code below

const text = prompt("Enter text:");

alert(firstChar(text));