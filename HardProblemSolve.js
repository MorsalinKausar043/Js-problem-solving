// feetToInch function work and done!

// const feetToInch = (feet) => {
    
//     const Inch = feet / 12;
//     return Inch;
// };

// const feet = 20;
// const feetToInchFunc = feetToInch(feet);
// console.log(feetToInchFunc);

// centimeterToMeter function work and done!

// const centimeterToMeter = (centimeter) => {
    
//     const Meter = centimeter / 100;
//     return Meter;
// };

// const centimeter = 100;
// const centimeterToMeterFunc = centimeterToMeter(centimeter);
// console.log(centimeterToMeterFunc);

// const 3 books sumition 

// const pageRequirement = (firstBook, secondBook, thirdBook) => {
    
//     const TotalPage = firstBook + secondBook + thirdBook;
//     return TotalPage;
// };

// const firstBook = 100;
// const secondBook = 200;
// const thirdBook = 300;

// const pageRequirementFunc = pageRequirement(firstBook, secondBook, thirdBook);
// console.log("page requirement for",pageRequirementFunc);

// name big length show 

// const bestFriend = (names) => {
    
//     let bigCharecter = [0];
//     for (const name of names)
//     {
//         let element = name;

//         if (element > bigCharecter)
//         {
//             bigCharecter = element;
//         }
//     }

//     return bigCharecter;
// };

// const names = ["jakir","kausar","afifars","thend"]

// const bestFriendFunc = bestFriend(names);
// console.log(bestFriendFunc);

// const bestFriend = (names) => {
    
//     let largest = 0;
//     let logical;

//     for (let name of names)
//     {
//         let element = name;

//         if (element.length > largest)
//         {
//             let largest = element.length;
//             logical = element;
//         }
//     }

//     return logical;
// };

// const names = ["morsalin kausar" , "jamalpur high school" , "jamalpur technical school"]

// const bestFriendFunc = bestFriend(names);
// console.log(bestFriendFunc);


// show positive number 

const onlyPositive = (number) => {

    let positive = [];

    for (let numbers of number)
    {
        if (numbers  > 0)
        {
            positive.push(numbers);
        } else
        {
            break;
        }
    }

    return positive;
};

const number = [2, 43, 5, 3, 5,-2,-5];
const onlyPositives = onlyPositive(number)
console.log(onlyPositives);