
function checkFibonacciNumber(number) {
    let a = 0;
    let b = 1;

    while (b < number) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    if (b === number) {
        console.log(`${number} Pertence a sequencia Fibonacci.`);
    } else {
        console.log(`${number} não pertence a sequencia Fibonacci`);
    }
}

const number = 3;
checkFibonacciNumber(number);
