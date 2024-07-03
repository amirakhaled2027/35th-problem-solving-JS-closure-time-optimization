//Closure: Time Optimization

function find(index) {
    let a = [];
    for( let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }

    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");

console.time("12");
find(12);
console.timeEnd("12");

console.time("50");
find(50);
console.timeEnd("50");


//I will use closure now to see the difference

function find() {
    let a = [];
    for( let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }

    return function(index) {
        console.log(a[index]);
    }
}

console.time("6");
find(6);
console.timeEnd("6");

console.time("12");
find(12);
console.timeEnd("12");

console.time("50");
find(50);
console.timeEnd("50");