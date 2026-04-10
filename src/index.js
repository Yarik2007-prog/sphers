'use strict';

const spheres = 12;
const thickness = 0.01; // м
const PI = 3.14;
let outerRadius = 0.25; // м

let totalVolume = 0;

for (let i = 0; i < spheres; i++) {
    let innerRadius = outerRadius - thickness;

    let volume = (4 / 3) * PI * innerRadius**3;
    totalVolume += volume;

    outerRadius += thickness * 2;
}

console.log("Сумарний внутрішній об'єм:", totalVolume, "м³");