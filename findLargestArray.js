const findLargestArray = (numbers) => {
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++)
    {
        const element = numbers[i];
        if (element > largest)
        {
            largest = element;
        }
    }

    return largest;
};

const arrays = [1, 3, 2, 5, 6];
const minarrays = [-2, -3, -25];
const findarrays = findLargestArray(minarrays);
console.log(findarrays);


// task lowest array 