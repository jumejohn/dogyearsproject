var myAge = 34;
//this is my age 
var earlyYears = 2;
//this accounts for the early dog years

earlyYears *= 10.5;

var laterYears = myAge - 2;
//accounts for the later dog years after 2

laterYears *= 4;
//converts later years to dog years

//console.log(earlyYears);
//console.log(laterYears);

var myAgeInDogYears = (earlyYears + laterYears);
//calculates total dog years

var myName = 'Justin'.toLowerCase();
//converts my name to lower case characters

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
//logs the sentence using the above variables to complete
