// 1. String Manipulation Functions

function reverseString(str) {
    return Array.from(str).reverse().join("");
}

function countCharacters(str) {
    return Array.from(str).length;
}

function capitalizeWords(sentence) {
    return sentence.toLowerCase().replace(
        /(^|[\s-])(\p{L})/gu,
        (match, separator, letter) => separator + letter.toUpperCase()
    );
}

console.log("\n1. String Manipulation Functions");

console.log(reverseString("Hello"));
console.log(countCharacters("Hello World"));
console.log(capitalizeWords("hello world from javascript"));


// 2. Array Functions

function validateNumberArray(array, allowEmpty = true) {
    if (!Array.isArray(array)) {
        throw new TypeError("Input must be an array.");
    }

    if (!allowEmpty && array.length === 0) {
        throw new RangeError("Array cannot be empty.");
    }

    if (!array.every(Number.isFinite)) {
        throw new TypeError("All elements must be finite numbers.");
    }
}

function findMaximum(numbers) {
    validateNumberArray(numbers, false);

    let maximum = numbers[0];

    for (let number of numbers) {
        if (number > maximum) {
            maximum = number;
        }
    }

    return maximum;
}

function findMinimum(numbers) {
    validateNumberArray(numbers, false);

    let minimum = numbers[0];

    for (let number of numbers) {
        if (number < minimum) {
            minimum = number;
        }
    }

    return minimum;
}

function sumArray(numbers) {
    validateNumberArray(numbers);

    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

function filterArray(array, condition) {
    if (!Array.isArray(array)) {
        throw new TypeError("Input must be an array.");
    }

    if (typeof condition !== "function") {
        throw new TypeError("Condition must be a function.");
    }

    return array.filter(condition);
}

const numbers = [12, 5, 8, 21, 3, 16];

console.log("\n2. Array Functions");

console.log(findMaximum(numbers));
console.log(findMinimum(numbers));
console.log(sumArray(numbers));
console.log(filterArray(numbers, number => number > 10));


// 3. Mathematical Functions

function factorial(n) {
    if (!Number.isSafeInteger(n) || n < 0) {
        throw new RangeError("Input must be a non-negative safe integer.");
    }

    let result = 1n;

    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }

    return result;
}

function isPrime(n) {
    if (!Number.isSafeInteger(n)) {
        throw new TypeError("Input must be a safe integer.");
    }

    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function fibonacciSequence(terms) {
    if (!Number.isSafeInteger(terms) || terms < 0) {
        throw new RangeError("Number of terms must be a non-negative integer.");
    }

    const sequence = [];

    let a = 0n;
    let b = 1n;

    for (let i = 0; i < terms; i++) {
        sequence.push(a);

        let next = a + b;
        a = b;
        b = next;
    }

    return sequence;
}

console.log("\n3. Mathematical Functions");

console.log(factorial(5).toString());
console.log(isPrime(7));
console.log(isPrime(10));
console.log(fibonacciSequence(10).map(String));
