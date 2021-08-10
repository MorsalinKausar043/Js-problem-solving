const deliverCost = (pices) => {

    const delivery = 50;
    const dis5 = (5 / 100) * delivery;
    const dis3 = (3 / 100) * delivery;
    const dis2 = (2 / 100) * delivery;
    let first20man = 1000 + delivery - dis5;
    let second20man = 1000 + delivery - dis3;
    let lastAllman = 1000 + delivery - dis2;
    console.log(second20man);

    if (pices <= 20) {
        const total = pices * first20man;
        return total;
    }
    if (pices <= 40) {
        const first20Pices = 20 * first20man;
        const resPrice = pices - 20;
        const TotalSecondman = resPrice * second20man;
        const TotalSecondmanPrice = first20Pices + TotalSecondman;
        return TotalSecondmanPrice;
    } else {
        const first20Pices = 20 * first20man;
        const second20Pices = 20 * second20man;
        const resPrice = pices - 40;
        const TotalSecondman = resPrice * lastAllman;
        const TotalSecondmanPrice = first20Pices + second20Pices + TotalSecondman;
        return TotalSecondmanPrice;
    }
}

const pices = 105;
const deliveryCostFunc = deliverCost(pices);
console.log(deliveryCostFunc);