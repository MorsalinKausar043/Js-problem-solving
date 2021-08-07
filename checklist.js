// 1 step and 2 step done!

// this is comment and alhumdulillah

// let name = "morsalin";
// const age = 20;
// console.log(name);
// console.log(age);
// name = "kausar";
// console.log(name);

// 3nd step done!

// const x = 20;
// const y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// // 4th step done 

// const x = 20;
// const y = 22;
// const z = 25;

// console.log(x < y);
// console.log(x > y);
// console.log(x == y);
// console.log(x != y);
// console.log(x <= y);
// console.log(x >= y);

// // 5th step done 

// const x = 15;
// const y = 20;
// const z = 5;

// // used and 
// console.log(x < y && x != y);
// console.log(x > y && x != y);
// console.log(x > z && x == y);

// // used or 
// console.log(x > y || x == y);
// console.log(x > y || x != y);
// console.log(x > z || x % y);

// 6th step done 

// const x = 10;
// const y = 50;
// const z = 15;

// // if (x < z)
// // {
// //     console.log("You are true!");
// // }
// // else
// // {
// //     console.log("Sry you are wrong!");
// // }

// if (x === y)
// {
//     console.log("mission 1 is correct!");
// }
// else if (y <= z)
// {
//     console.log("mission 2 is correct!");
// }
// else
// {
//     console.log("mission 3 is correct!");
// }


// 7th step done 

// let i = 7;

// while (i <= 19)
// {
//     console.log(i);
//     i += 2;
// }

// // or 

// let ix = 7;

// while (ix <= 19)
// {
//     console.log(ix);
//     ix += 1;
// }

// 8th step done 

// let names = ["kausar", "jakir", "pranto", "zyne", "juana", "sumaiya", "jhumi", "sadiya", "sajid","kausar","jakir"];
// console.log(`This names array length is ${names.length}!`);
// console.log(names[2]);

// names[3] = "Adnan";

// console.log(names);

// for (name of names)
// {
//     console.log(name);
// }

// names.pop();
// names.pop();
// names.push("nahid");
// names.shift();
// names.unshift("morsalin Kausar")
// console.log(names);

// let unique = [];

// for (name of names)
// {
//     if (unique.indexOf(name) == -1)
//     {
//         unique.push(name)
//     }
// }

// console.log(unique);

// // 9th step done 

// let names = ["kausar", "jakir", "pranto", "zyne", "juana", "sumaiya", "jhumi", "sadiya", "sajid", "kausar", "jakir"];

// for (name of names)
// {
//     console.log(name);
// } 

// 10th step done 

// const greather80 = (nums) => {
//     let largest = [];

//     for (num of nums)
//     {
//         if (num > 80)
//         {
//             largest.push(num)
//         }
//     }
//     return largest;
// }

// const nums = [2, 33, 66, 88, 98, 75, 87, 86];
// // const nums = [-2,-33,-50,-90,102]
// const greather80Func = greather80(nums);
// console.log(greather80Func);

// 11th step done 

// const multiply = (x, y, z) => {

//     const total = x * y * z;
//     return total;
// }

// const x = 20;
// const y = 12;
// const z = 18;

// const multiplyFunc = multiply(x, y, z);
// console.log(multiplyFunc);

// 12th step done 

let details = { name: "kausar", age: 20, cls: "diploma 5th semister", hobby: "programming" };
console.log(details);
let { name, age, cls, hobby } = details;
console.log(`My name is ${name} , i am ${age} years . `);

details.name = "Morsalin Kausar";
console.log(details.name);
console.log(details);

for (detail in details)
{
    console.log(detail);
}

