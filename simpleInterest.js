const simpleInterest = (initialAmount, interest, time) => {
    
    const A = initialAmount * (1 + interest / 100 * time);
    return A;
};

const initialAmount = 300;
const interest = 10;
const time = 3;
const simpleInteFun = simpleInterest(initialAmount, interest, time);
console.log("Your Balance Is" , simpleInteFun);