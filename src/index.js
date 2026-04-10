'use strict';

const SPHERES = 12;
const THINKNESS = 0.01; 
const PI = 3.14;

let outerDiametr = 0.5; 
let totalVolume = 0;

for (let i = 0; i < SPHERES; i++) {

    let innerDiametr = outerDiametr - 2 * THINKNESS;

    let volume = (PI * innerDiametr ** 3) / 6;
    totalVolume += volume;

    outerDiametr += THINKNESS * 2;
}

console.log("Сумарний внутрішній об'єм:", totalVolume.toFixed(5), "м³");