// ------------1---------------

const num = [5, 6, 65, 1, 9, 3, 12];

for (item of num) {
    if(item > 3 && item < 10 ) {
        console.log(item);
        continue;
    }
}