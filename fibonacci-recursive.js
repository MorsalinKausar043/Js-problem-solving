// const fibonacci = (n) => {
    
//     if (n == 0)
//     {
//         return 0;
//     }
//     else if (n == 1)
//     {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// };

// const fibos = fibonacci(8);
// console.log(fibos);


// fibonacci searies 

const fibonacciSearies = (n) => {
    
    if (n == 0)
    {
        return [0];
    }
    else if (n == 1)
    {
        return [0, 1];
    }
    const fibo = fibonacciSearies(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
};

const fibos = fibonacciSearies(8);
console.log(fibos);