class Car
{
    constructor(producer, model, insureYear, avgSpeed)
    { 
        this.producer = producer;
        this.model = model;
        this.insureYear = insureYear;
        this.avgSpeed = avgSpeed;
    }
}

function showCarInfo(car){
    alert(car.producer + car.model + car.insureYear + car.avgSpeed);
}

function calculateRest(allTime, restTm){
    let restTime = 0;
    let count = 0;
    for(let i = 0; i < allTime; i++, count++){ 
        if(count == 4){
            restTime+=restTm;
            count = 0;
        }
    }
    return restTime;
}

function calculateTripTime(discance, car){
    let allTime = discance / car.avgSpeed;
    return allTime + calculateRest(allTime, 1);
}

class Fraction{
    constructor(numerator, denominator){
        this.numerator = numerator;
        this.denominator = denominator;
    }
}

function findNOD(num1, num2){
    while (num1 != 0 && num2 != 0){
    if(num1 >= num2)
        num1 %= num2
    else
        num2 %= num1
    }
    return num1 || num2;
}

function sumFraction(fr_1, fr_2){
    let commonDenominator = fr_1.denominator * fr_2.denominator;
    let fr_1_numerator = fr_1.numerator * fr_2.denominator;
    let fr_2_numerator = fr_2.numerator * fr_1.denominator;
    let commonNumerator = fr_1_numerator + fr_2_numerator;
    return reduceFraction(new Fraction(commonNumerator, commonDenominator));
}

function subFraction(fr_1, fr_2){
    let commonDenominator = fr_1.denominator * fr_2.denominator;
    let fr_1_numerator = fr_1.numerator * fr_2.denominator;
    let fr_2_numerator = fr_2.numerator * fr_1.denominator;
    let commonNumerator = fr_1_numerator - fr_2_numerator;
    return reduceFraction(new Fraction(commonNumerator, commonDenominator));
}

function multFraction(fr_1, fr_2){
    return new Fraction(fr_1.numerator * fr_2.numerator, fr_1.denominator * fr_2.denominator);
}

function divFraction(fr_1, fr_2){
    return new Fraction(fr_1.numerator * fr_2.denominator, fr_1.denominator * fr_2.numerator);
}

function reduceFraction(fr_1){
    var nod = findNOD(fr_1.numerator, fr_1.denominator);
    return new Fraction(fr_1.numerator / nod, fr_1.denominator / nod);
}


class MYTime{
    constructor(hour, min, sec){
        this.hour = hour;
        this.min = min;
        this.sec = sec;
    }
}

function showTime(time){
    alert(time.hour + ':' + time.min + ':' + time.sec);
}

function getDate(time){
    let date = new Date();
    date.setHours(time.hour);
    date.setMinutes(time.min);
    date.setSeconds(time.sec);
    return date;
}

function _addSeconds(time, sec){
    let date = getDate(time);
    date.setSeconds(date.getSeconds() + sec);
    return new MYTime(date.getHours(), date.getMinutes(), date.getSeconds());
}

function _addMinutes(time, min){
    let date = getDate(time);
    date.setSeconds(date.getSeconds() + min * 60);
    return new MYTime(date.getHours(), date.getMinutes(), date.getSeconds());
}

function _addHours(time, hour){
    let date = getDate(time);
    date.setSeconds(date.getSeconds() + hour * 3600);
    return new MYTime(date.getHours(), date.getMinutes(), date.getSeconds());
}


const car = new Car('123', 'Жигули)', 1990, 60);
showCarInfo(car);
console.log(calculateTripTime(1000, car));

const fr_1 = new Fraction(1,2);
const fr_2 = new Fraction(1,3);
console.log(sumFraction(fr_1, fr_2));
console.log(subFraction(fr_1, fr_2));
console.log(divFraction(fr_1, fr_2));
console.log(reduceFraction(new Fraction(5,10)));


const time = new MYTime(16, 26, 50);
showTime(time);
console.log(_addSeconds(time, 60));
console.log(_addMinutes(time, 2));
console.log(_addHours(time, 2));