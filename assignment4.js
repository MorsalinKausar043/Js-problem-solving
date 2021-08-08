
// seerToMon function start 

function seerToMon(kg) {
    
    if (Number(kg) && kg > 0) //used vilidation of number and used if-else;
    {
        const Mon = kg / 40;
        return Mon;
    }
    else
    {
        return "invalid your input data!"
    }
};

const kg = 80;
const seerToMonFunc = seerToMon(kg);
console.log(seerToMonFunc);


// seerToMon function end 


// totalSales function start 

function totalSales(shart,pant,shoes) {
    
    if ((Number(shart) && shart > 0) && (Number(pant) && pant > 0) && ( Number(shoes) && shoes > 0))  //used vilidation of number and used if-else 
    {
        // perPieces product price 
    let perPiecesShart = 100;
    let perPiecesPant = 200;
    let perPiecesShoes = 500;

    // need product and perPieces product multiply 
    let shartPrice = shart * perPiecesShart;
    let pantPrice = pant * perPiecesPant;
    let shoesPrice = shoes * perPiecesShoes;

    // all product sum 
    const totalPrice = shartPrice + pantPrice + shoesPrice;
    return totalPrice;
    }
    else
    {
        return "invalid your input data!"
    }
};

const totalSalesFunc = totalSales(2, 3, 4);
console.log(totalSalesFunc);

// totalSales function end 



// delivery cost function start 

function deliveryCost(pices) {
    
    // all delivery charge 
    let first100Prices = 100;
    let second200Prices = 80;
    let third300Prices = 50;

    if (Number(pices) && pices > 0)  //used vilidation of number and used if-else;
    {
        if (pices <= 100)
        {
            // first 100 pices charge per pices 100tk
            const total = pices * first100Prices;
            return total;
        }
        else if (pices <= 200)
        {
            // second 100 pices charge per pices 80tk
            const first100Product = 100 * first100Prices;
            const restPrices = pices - 100;
            const second100Product = restPrices * second200Prices;
            const totalProduct = first100Product + second100Product;
            return totalProduct;
        }
        else
        {
            // now all pices charge per pices 50tk
            const first100Products = 100 * first100Prices;
            const second100Product = 100 * second200Prices;
            const restPrices = pices - 200;
            const restProduct = restPrices * third300Prices;
            const totalProduct = first100Products + second100Product + restProduct;
            return totalProduct;
        }
    }
    else
    {
        return "invalid your input data!"
    }
};

const deliveryPices = 300;
const deliveryCostFunc = deliveryCost(deliveryPices);
console.log(deliveryCostFunc);

// delivery cost function end 


// perfectFriend function start 

function perfectFriend(names) {

    // declare empty arry
    let unique = [];

    for (let name of names) // used for loop 
    {
        if (name.toString() && !Number(name)) // used toString and Number for the validation!
        {
            if (name.length === 5)
            {
                unique.push(name);
            }
        }
        else
        {
            return "invalid your input data!"
        }
    }

    return unique.toString(); //used to string for the conver array to string
};

const names = ["kausar", "jakir", "pranto", "dipus", "ayub"];
const perfectFriendFunc = perfectFriend(names);
console.log(perfectFriendFunc);

// perfectFriend function end