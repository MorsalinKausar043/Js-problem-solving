
// function used to fibonacci

// const fibonacciSearies = (num) => {
//     const fibo = [0, 1];

//     for (let i = 2; i <= num; i++)
//     {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }

//     return fibo;
// };

// const fiboSearies = fibonacciSearies(10);
// console.log(fiboSearies);

// again used to statement 

const fibonacciSearies = (num) => {
    const fibo = [0, 1];

    if (typeof num != "number")
    {
        return "sry this is not a number!";

    }
    else if (num < 2)
    {
        return "please enter a positive number!";
    }
    else
    {
        for (let i = 2; i <= num; i++)
    {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo;
    }
};

const fiboSearies = fibonacciSearies(10);
console.log(fiboSearies);