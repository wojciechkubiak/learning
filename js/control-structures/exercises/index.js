// 1
let randomNumber = Math.random();

while(randomNumber <= 0.7) {
    console.log(randomNumber);
    randomNumber = Math.random();

    if(randomNumber > 0.7)
        alert('Number bigger than 0.7');
}

// or
const v1 = Math.random();

if(v1 > 0.7)
    alert('Number bigger than 0.7 II');

// 2
const x = [1, 2, 3, 4, 5];
const y = [1, 2, 3, 4, 5];

x.forEach((val) => console.log(val));

for(const _y of y) {
    console.log(_y);
}

// 3
for(let i = y.length; i >= 0; i--) {
    console.log(i);
}

// 4
const v2 = Math.random();

if((v1 > 0.7 && v2 > 0.7) || (v1 < 0.2 || v2 < 0.2))
    console.log((v1 > 0.7 && v2 > 0.7) ? `First scenario v1: ${v1} v2: ${v2}` : `Second scenario v1: ${v1} v2: ${v2}`);