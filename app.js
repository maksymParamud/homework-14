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