// for loop factorail

// let factorail = 1;

// for (let i = 6; i >= 1; i--)
// {
//     factorail *= i;
// }

// console.log(factorail);

// used recursive 

const factorail = (n) => {
    
    if (n == 1)
    {
        return 1
    }

    return factorail(n - 1) * n;
};

console.log(factorail(6));