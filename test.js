test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');

   
    const dollars = fromEuroToDollar(3.5);

   
    const expected = 3.5 * 1.07;

    
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})
test ("one dolar is 146.26168224299064 in yen", function(){
    const {fromDollarToYen} = require('./app.js');
    const yens = fromDollarToYen(2);
    const expected = 2 * 146.26168224299064;
    expect(fromDollarToYen(2)).toBe(292.5233644859813)
    
})
test ("one pound is 179.88505747126436 in yen", function(){
    const {fromYenToPound} = require('./app.js')
    const paund = fromYenToPound(2);
    const expected = 2 * 179.88505747126436;
    expect(fromYenToPound(2)).toBe(359.7701149425287);
    
})







