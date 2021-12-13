const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    times: function(a, b){
        return a*b;
    },
    divine: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a ** b;
    }
    
}
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10 );
const timesResult = calculator.times(10, minusResult );
const divineResult = calculator.divine(timesResult, plusResult );
const powerResult = calculator.power(divineResult, minusResult );

console.log(plusResult);