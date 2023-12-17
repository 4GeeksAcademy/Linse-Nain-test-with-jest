let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (amountInUsd){
    let rate = oneEuroIs.JPY / oneEuroIs.USD;
    let yenAmount = rate * amountInUsd;
    return yenAmount
    
}
function fromEuroToDollar(amountInEuro){
    let rate = oneEuroIs.USD;
    let amountUsd = rate * amountInEuro
    return amountUsd
}
function fromYenToPound(amountInYenes){ 
let rate = oneEuroIs.JPY / oneEuroIs.GBP
let amountGbp = rate * amountInYenes
return amountGbp;
}
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}


console.log(fromYenToPound(2))