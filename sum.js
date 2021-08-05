let numbers = [2, 3, 5, 64, 6, 7,10];
let sum = 0;

// for (let i = 0; i < numbers.length; i++)
// {
//     const element = numbers[i];
//     // sum = sum + element;
//     sum += element;
// };

// console.log(sum);

// used to function 

const arryTotal = (numbers) => {
    for (let i = 0; i < numbers.length; i++)
    {
        const element = numbers[i];
        // sum = sum + element;
        sum += element;
    };

    console.log(sum);
};

arryTotal(numbers)