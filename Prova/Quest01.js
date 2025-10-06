let a = 1;
let b = -5;
let c = 6;

function calcDelta(a,b,c){
    let delta = b**2 - 4*a*c;
    return delta;
}

console.log("Delta: " + calcDelta(a,b,c));