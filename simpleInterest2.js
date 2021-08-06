
const simpleInterest = (Amount, interest, time) => {
    
    const total = Amount * (1 + interest / 100 * time);
    return total;
}

const Amount = 300;
const interest = 10;
const time = 3;

const interestF = simpleInterest(Amount, interest, time);
console.log(interestF);