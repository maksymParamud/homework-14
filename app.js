// ----------------1------------------

const num = [5, 6, 65, 1, 9, 3, 12];

for (item of num) {
    if(item > 3 && item < 10 ) {
        console.log(item);
        continue;
    }
}

// ----------------2-------------------

const num1 = [1, 2, 5, 9, 4, 13, 4, 10];

for (item of num1) {
    if (item === 4) {
        console.log("Наявний!");
        break;
    }
}

// ------------------3------------------

const mass = [42, 2, 33, 11, 12, 10, 0];

const sum = mass.reduce((total, current) => total + current, 0);

const average = sum / mass.length;

console.log("Середнє арифметичне:", Math.trunc(average));

// ------------------4-------------------

const words = ["parrot", "bull", "bear", "monkey"];

let total = words.reduce(function(acumulator, currentItem) {
    let textLen = currentItem.length;
    return acumulator + textLen;
},0)

console.log(total);

// -------------------5-------------------

const mass1 = ["parrot", 140,"bull",true, 0, "bear", 47, "monkey"];

let stringArray = mass1.filter(item => typeof item === "string");

console.log(stringArray);