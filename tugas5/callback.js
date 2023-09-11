function bagi(a, b){
    return a / b;
}

function bagikan(x, y, operasi){
    return operasi(x, y);
}

console.log(bagikan(5, 5, bagi));