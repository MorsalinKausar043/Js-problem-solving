// non recursive or recurson 

// let sum = 0;

// for (let i = 6; i >= 1; i--)
// {
//     sum = sum + i;
// }

// console.log(sum);

// used to recursive or recursone

const sum = (i) => {
    
    if (i == 1)
    {
        return 1;
    }

    return i + sum(i - 1);
};

console.log(sum(6));