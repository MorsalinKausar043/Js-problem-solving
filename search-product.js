let products = [

    { name: "nokia", price: 12000 },
    { name: "realmi", price: 14000 },
    { name: "techno", price: 16000 },
    { name: "oppo", price: 18000 },
    { name: "vivo", price: 20000 },
    { name: "xioami", price: 22000 },
    { name: "one-plus", price: 24000 }
];

const ProductFunction = (products, input) => {
    
    let matched = [];
    let inputs = input.toLowerCase();
    // console.log(inputs);
    for (let product of products)
    {
        
        if (product.name.indexOf(inputs) != -1)
        {
             matched.push(product);
        }
        // else
        // {
        //     return "invalid your data!"
        // }
    }
    // return products.filter((x) => x.name == input);
    return matched;
};

const ProductFunc = ProductFunction(products,"X");
console.log(ProductFunc);