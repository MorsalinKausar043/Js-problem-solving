/*
1! = 1
2! = 2 X 1
3! = 3 X 2 X 1
4! = 4 X 3 X 2 X 1
5! = 5 X 4 X 3 X 2 X 1
6! = 6 X 5 X 4 X 3 X 2 X 1
7! = 7 X 6 X 5 X 4 X 3 X 2 X 1
n! = n * (n-1)!
*/

// onnothay

/*
1! = 1
2! = 2 X 1!
3! = 3 X 2!
4! = 4 X 3!
5! = 5 X 4!
6! = 6 X 5!
7! = 7 X 6!
n! = n * (n-1)!
*/

// const factorial = (n) => {
//     if (n == 1)
//     {
//         return 1;
//     }
//     return n * factorial(n - 1);
// };

// const factNumber = 20;
// const facts = factorial(factNumber);
// console.log(facts);


// again write the code 

const factorial = (n) => {
    if (n == 1)
    {
        return 1;
    }
    return n * factorial(n - 1);
};

const factNumber = 20;
const facts = factorial(factNumber);
console.log(facts);