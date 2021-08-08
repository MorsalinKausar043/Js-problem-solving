const animalsCount = (miles) => {
    let first10miles = 10;
    let second10miles = 50;
    let third10miles = 100;

    if (miles <= 10)
    {
        const count = miles * first10miles;
        return count;
    }
    else if (miles <= 20)
    {
        const firstDenseMile = 10 * first10miles;
        const restMiles = miles - 10;
        const restDenseMile = restMiles * second10miles;
        const totalMiles = firstDenseMile + restDenseMile;
        return totalMiles
    }
    else
    {
        const firstDenseMiles = 10 * first10miles;
        const secondDenseMile = 10 * second10miles;
        const restMiles = miles - 20;
        const restDenseMile = restMiles * third10miles;
        const totalMiles = firstDenseMiles + restDenseMile + secondDenseMile;
        return totalMiles
    }
}

const miles = 35;
const animalsCountFunc = animalsCount(miles);
console.log(animalsCountFunc);