// celcius to farenheit

const CtoF = (celcius) => {

        const cel = celcius * 9 ;
    return  cel / 5 + 32;
};

const celciusNum = 3;
const CtoFfunction = CtoF(celciusNum);
console.log("the farenheit is", CtoFfunction);


// fahrenheit to celsius

// const FtoC = (farenheit) => {
    
//     const faren = farenheit - 32;
//     return  faren * 5 / 9;
// };

// const farenheitNum = 2;
// const FtoCfunction = FtoC(farenheitNum);
// console.log("the Celcius is", FtoCfunction);