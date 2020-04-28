/***************************
*Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/
// Variable naming rules


/***************************
*Variable mutation and type coercion
*/
/*
var firstName = 'Alex';
var age = 37;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Type mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

*/



/*************************
*Basic operators
*/
/*
var year, yearJohn, yearMark;

now = 2018;
ageJohn = 28;
ageMark = 33;


// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/


/*************************
*Operator precendence
*/
/*
var now = 2018;
var yearJonh = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJonh >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJonh = now - yearJonh;
var ageMark = 35;
var average = (ageJonh + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
// x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);

// x = x + 1;
// console.log(x);
// x += 1;
// console.log(x);
x--;
console.log(x);
*/


/************************
*CODING CHALLENGE
*/
/*
var massMark, heightMark, massJohn, heightJohn;
massMark = 70;
heightMark = 1.70;
massJohn = 100;
heightJohn = 1.80;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
var bestBMI = bmiJohn < bmiMark;

console.log('Is Mark\'s BMI higher than John\'s? ' + bestBMI);


console.log('What is John\'s BMI if his mass is ' + massJohn + ' and height is ' + heightJohn + ' ? It is ' + BMIJohn);
console.log('What is Mark\'s BMI if his mass is ' + massMark + ' and height is ' + heightMark + ' ? It is ' + BMIMark);
*/

/************************
* If / else statements
*/

/*

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}




var massMark, heightMark, massJohn, heightJohn;
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

*/

// var bestBmi = bmiJohn < bmiMark;
// console.log('Is Mark\'s BMI higher than John\'s? ' + bestBmi);
/*
if (BMIJohn < BMIMark) {
    console.log('Mark\'s BMI is higher than John\'s.');  
} else {
    console.log('John\'s BMI higher than Mark\'s.');  
}

*/


/**********************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 30;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Betweeb 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teacher.');       
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

*/




/**********************
* The Ternanry Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 20;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/
// Same:
/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
} */

/*
// Switch statement - else + else if analog
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids now to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designes beatiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.')
}

*/

/*
var firstName = 'John';
var age = 30;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Betweeb 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teacher.');       
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

as switch:
*/
/*
age = 30;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teacher.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
       console.log(firstName + ' is a man.'); 
}

*/


/*****************************
* Truthy and Falsy values and equality operators
*/

// falsy in if-else statements conditions. Values: undefined, null, '', 0, NaN
// truthy values: NOT falsy values
/*
var height;

height = 0;

if (height || height === 0) { // if(height) - check if variable is defined. === 0 - to check if the variable set to zero
    console.log('Variable is defined ' + height);
} else {
    console.log('The variable has NOT been defined ' + height);
}

// Equality operators

if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/

/*
// Challenge
var johnScoreOne = 89;
var johnScoreTwo = 120;
var johnScoreThree = 103;

var mikeScoreOne = 116;
var mikeScoreTwo = 94;
var mikeScoreThree = 123;

var maryScoreOne = 97;
var maryScoreTwo = 134;
var maryScoreThree = 105;

var johnScoreAverage = (johnScoreOne + johnScoreTwo + johnScoreThree) / 3;
var mikeScoreAverage = (mikeScoreOne + mikeScoreTwo + mikeScoreThree) / 3;
var maryScoreAverage = (maryScoreOne + maryScoreTwo + maryScoreThree) / 3;

// Option 1
if (johnScoreAverage > mikeScoreAverage && johnScoreAverage > maryScoreAverage) {
    console.log('John is the winner! John has ' + johnScoreAverage + ' points in average.');
} else if (mikeScoreAverage > johnScoreAverage && mikeScoreAverage > maryScoreAverage)  {
    console.log('Mike is the winner! Mike has ' + mikeScoreAverage + ' points in average.');
} else if (maryScoreAverage > johnScoreAverage && maryScoreAverage > mikeScoreAverage) {
    console.log('Mary is the winner! Mary has '  + maryScoreAverage + ' points in average.');       
} else {
    console.log('The match is draw. Everyone got ' + maryScoreAverage + ' points in average.');
}

// Option 2
switch(true) {
    case johnScoreAverage > mikeScoreAverage && johnScoreAverage > maryScoreAverage:
        console.log('John is the winner!');
        break;
    case mikeScoreAverage > johnScoreAverage && mikeScoreAverage > maryScoreAverage:
        console.log('Mike is the winner!');
        break;
    case maryScoreAverage > johnScoreAverage && maryScoreAverage > mikeScoreAverage:
        console.log('Mary is the winner!');
        break;
    default: 
        console.log('The match is draw.');
}

*/


/****************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);



function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');  
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/



/******************************
* Function Statements and Expressions
*/

// Function declaration

// function whatDoYouDo(job, firstName) {}

//Function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beatiful websites';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/***********************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);


// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/



/*********
* Coding Challenge
*/
/*
function tipCalculator(bill) {
    if ( bill <= 50 ) {
        bill += bill *= .2;    
    } else if ( bill > 50 && bill <= 200 ) {
        bill += bill *= .15;   
    } else {
        bill += bill *= .1;
    }
    paidArray.push(bill);
}

var billArray = [124, 48, 268];
var paidArray = [];

tipCalculator(billArray[0]);
tipCalculator(billArray[1]);
tipCalculator(billArray[2]);

console.log('John had today $' + billArray[0] + ', $' + billArray[1] + ', $' + billArray[2] + ' bills in ' + (billArray.length) + ' restaurants and paid $' + paidArray[0] + ', $' + paidArray[1] + ', $' + paidArray[2] + ' totally including tips.');


// Instructor:

function tipCalculator2(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator2(bills[0]),
           tipCalculator2(bills[1]),
           tipCalculator2(bills[2])];
var finalValues = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];

console.log(tips, finalValues);
*/



/*************************
* Objects and properties
*/

/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

*/



/**************************
* Objects and methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

// var age = john.calcAge();
// john.age = age; // same:

john.calcAge();
console.log(john);
*/




/*******************************
* Coding challenge
*/
/* 
var manOne = {
    fullName: 'John',
    mass: 60,
    height: 1.70,
    bmiCalc: function() {
         this.bmi = this.mass / (this.height * this.height);
         return this.bmi;
    }
};

var manTwo = {
    fullName: 'Mark',
    mass: 60,
    height: 1.70,
    bmiCalc: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi; // the it used in if statement
    }
};

if ( manOne.bmiCalc() > manTwo.bmiCalc() ) {
    console.log(manOne.fullName + '\'s BMI is ' + manOne.bmi + ' and it is higher than ' + manTwo.fullName + '\'s.');
} else if ( manOne.bmi < manTwo.bmi ) {
    console.log(manTwo.fullName + '\'s BMI is ' + manTwo.bmi + ' and it is higher than ' + manOne.fullName + '\'s.');
} else {
    console.log(manOne.fullName + ' and ' + manTwo.fullName + ' have the same BMI and it is ' + manOne.bmi);
}




// MY VERSION WITH FUNCTION AND INPUT VALUES


var man = {
    bmiCalc: function(mass, height) {
         this.bmi = mass / (height * height);
    }
};


function highestBMI (manOneFullName, manTwoFullName, manOneBmi, manTwoBmi) {
if ( manOneBmi > manTwoBmi ) {
    console.log(manOneFullName + '\'s BMI is ' + manOneBmi + ' and it is higher than ' + manTwoFullName + '\'s.');
} else if ( manOneBmi < manTwoBmi ) {
    console.log(manTwoFullName + '\'s BMI is ' + manTwoBmi + ' and it is higher than ' + manOneFullName + '\'s.');
} else {
    console.log(manOneFullName + ' and ' + manTwoFullName + ' have the same BMI and it is ' + manOneBmi);
}    
}


fullName = 'John Smith';
mass = 60;
height = 1.70;

man.bmiCalc(mass, height);

var manOneBmi = man.bmi;
var manOneFullName = fullName;


fullName = 'Mark Khvan';
mass = 60;
height = 1.70;

man.bmiCalc(mass, height);

var manTwoFullName = fullName;
var manTwoBmi = man.bmi;

highestBMI(manOneFullName, manTwoFullName, manOneBmi, manTwoBmi);

*/



/*******************************
* Loops and iterations
*/
/*

for (var i = 0; i < 10; i++) { // i++ = i+1
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
//...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


// For loop
for (var i = 1; i <= 20; i += 2) { //i+=2 = i+2
    console.log(i);
}


var john = ['John', 'Smith', 1990, 'designer', false];


// console.log(john[0]);
// console.log(john[1]);
// console.log(john[2]);
// console.log(john[3]);
// console.log(john[4]);


// same:

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue; //continue - skip not string. !== - different operator. SAME if (typeof john[i] !== 'string') { continue };
    
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break; // break - stop by reaching not string
    
    console.log(john[i]);
}

// Small challenge - Reverse search within the array
// Looping backwards

for (var i = john.length - 1; i >= 0; i--) { // if not -1, undefined. But it would not be printed
    if (typeof john[i] !== 'string') continue;    
    console.log(john[i]);
}
*/

/*****************************
* CODING CHALLENGE
*/

var john = {
    billsArray: [124, 48, 268, 180, 42],
    billsTipsArray: [],
    tipsArray: [],
    tipsCalc: function() {
        for (var i = 0; i < this.billsArray.length; i++) {
            if (this.billsArray[i] <= 50) {
              this.tipsArray[i] = this.billsArray[i] * .2;
              this.billsTipsArray[i] = this.billsArray[i] + this.tipsArray[i];
              
            } else if (this.billsArray[i] > 50 && this.billsArray[i] <= 200) {
                this.tipsArray[i] = this.billsArray[i] * .15;
                this.billsTipsArray[i] = this.billsArray[i] + this.tipsArray[i];
          
            } else {
                this.tipsArray[i] = this.billsArray[i] * .1;
                this.billsTipsArray[i] = this.billsArray[i] + this.tipsArray[i];
            }
        }
    }
}

var mark = {
    billsArray: [77, 375, 110, 45],
    billsTipsArray: [],
    tipsArray: [],
    tipsCalc: function() {
        for (var i = 0; i < this.billsArray.length; i++) {
            if (this.billsArray[i] <= 100) {
              this.tipsArray[i] = this.billsArray[i] * .2;
              this.billsTipsArray[i] = this.billsArray[i] + this.tipsArray[i];
              
            } else if (this.billsArray[i] > 100 && this.billsArray[i] <= 300) {
                this.tipsArray[i] = this.billsArray[i] * .1;
                this.billsTipsArray[i] = this.billsArray[i] + this.tipsArray[i];
          
            } else {
                this.tipsArray[i] = this.billsArray[i] * .25;
                this.billsTipsArray[i] = this.billsArray[i] + this.tipsArray[i];
            }
        }
    }
}


var averageTip = function() {
    var averageMark = 0;
    var averageJohn = 0;
    mark.tipsCalc();
    john.tipsCalc();
    for (var i = 0; i < mark.billsTipsArray.length; i++) {
        averageMark = mark.billsTipsArray[i];
    }
    
    for (var i = 0; i < john.billsTipsArray.length; i++) {
        averageJohn = john.billsTipsArray[i];
    }
    
    if (averageJohn / john.billsTipsArray.length > averageMark / mark.billsTipsArray.length) {
        return 'John\'s family paid the highest tips on average. In average John paid ' + averageJohn / john.billsTipsArray.length + ' and Mark paid ' +  averageMark / mark.billsTipsArray.length + '.';
    } else {
        return 'John\'s family paid the highest tips on average. In average John paid ' + averageJohn / john.billsTipsArray.length + ' and Mark paid ' +  averageMark / mark.billsTipsArray.length + '.';
    }

}

console.log(averageTip());
/*
john.tipsCalc();

console.log(john.billsArray);
console.log(john.tipsArray);
console.log(john.billsTipsArray);
            
mark.tipsCalc();

console.log(mark.billsArray);
console.log(mark.tipsArray);
console.log(mark.billsTipsArray);
*/





































