const express = require('express');

function testLogic(data) {
    function isNumber(str) {
        return /^-?\d+$/.test(str);
    }

    function isAlpha(char) {
        return /^[A-Za-z]$/.test(char);
    }

    function isSpecial(char) {
        return /^[^A-Za-z0-9]$/.test(char);
    }

    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;
    let allAlphabets = '';

    data.forEach(item => {
        if (typeof item === 'string') {
            if (isNumber(item)) {
                const num = parseInt(item);
                sum += num;

                if (num % 2 === 0) {
                    evenNumbers.push(item);
                } else {
                    oddNumbers.push(item);
                }
            } else {
                for (let char of item) {
                    if (isAlpha(char)) {
                        allAlphabets += char;
                    } else if (isSpecial(char)) {
                        if (!specialCharacters.includes(char)) {
                            specialCharacters.push(char);
                        }
                    }
                }

                if (item.match(/^[A-Za-z]+$/)) {
                    alphabets.push(item.toUpperCase());
                }
            }
        }
    });

    let concatString = '';
    if (allAlphabets.length > 0) {
        const reversedAlphabets = allAlphabets.split('').reverse().join('');

        for (let i = 0; i < reversedAlphabets.length; i++) {
            if (i % 2 === 0) {
                concatString += reversedAlphabets[i].toUpperCase();
            } else {
                concatString += reversedAlphabets[i].toLowerCase();
            }
        }
    }

    return {
        is_success: true,
        user_id:"hardik_dahiya_25052004",
        email: "hardik.dahiya2022@vitstudent.ac.in",
        roll_number: "22BCE1301",
        odd_numbers: oddNumbers,
        even_numbers: evenNumbers,
        alphabets: alphabets,
        special_characters: specialCharacters,
        sum: sum.toString(),
        concat_string: concatString
    };
}

console.log('Testing Example A:');
const testA = testLogic(["a","1","334","4","R", "$"]);
console.log(JSON.stringify(testA, null, 2));

console.log('\n\nTesting Example B:');
const testB = testLogic(["2","a", "y", "4", "&", "-", "*", "5","92","b"]);
console.log(JSON.stringify(testB, null, 2));

console.log('\n\nTesting Example C:');
const testC = testLogic(["A","ABcD","DOE"]);
console.log(JSON.stringify(testC, null, 2));
