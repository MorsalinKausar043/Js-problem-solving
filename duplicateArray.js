// const arrays = [2, 2, 3, 3, 3,];
// for (const val of arrays)
// {
//     console.log(val);
// }

let arrays = ["kausar", "jakir", "dipa", "ayub", "pranto", "kausar", "jakir"];

const duplicate = (num) => {
    let unique = [];

    for (let element of num)
    {
        if (unique.indexOf(element) == -1)
        {
            unique.push(element);
        }
    }

    return unique;
}

const dupF = duplicate(arrays);
console.log(dupF);